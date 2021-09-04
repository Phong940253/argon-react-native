var URL = "https://dkhp.hcmue.edu.vn/Login";


var classCodeList;
var runCheck = false ;
var loginCheck = false;
var msTime = 300;
var spam = false;


var loginErrors = ["Tài khoản / mật khẩu không đúng", "nợ phí không thể đăng ký học phần"];

function writeLog(string, type = 'error') {
    var log = document.getElementsByClassName('log')[0];
    log.innerHTML += `<span class='${type} text'>${string}<span><br/>`;
    log.scrollTop = log.scrollHeight;
}

function getMHP() {
    var data = document.getElementById('mhp').value ;
    data = data.split("|");
    return data.reduce((acc, curr)=> (acc[curr] = 0, acc),{});
}
function getAccount() {
    msTime = document.getElementById('timeRes').value;
    console.log(msTime);
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    return `username=${username}&password=${password}`
}

function dkhp(i) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    if(!runCheck || classCodeList[i] == 1) return;
    var url = `https://dkhp.hcmue.edu.vn/DangKyHocPhan/DangKy?Hide=${i}$0.0$${i}$$0|&acceptConflict=false&classStudyUnitConflictId=&RegistType=KH`;
    xhr.open('get', url , true);
    xhr.onreadystatechange = async function (){
        if(xhr.readyState === 4)
            if(!runCheck || classCodeList[i] == 1) return;
            var Scode = xhr.status;
            if(Scode === 200){
                var res = JSON.parse(this.responseText).Msg;
                console.log(res);
                if(res.includes("thành công")) {
                    writeLog(i + " - " + res)
                    classCodeList[i] = 1;
                    return;
                }
                else if(res.includes("Trùng lịch")) {
                    writeLog(i + "-" + "Trùng lịch")
                    classCodeList[i] = 2;
                    return;
                }
                else if(res.includes("đủ số lượng không thể đăng ký tiếp")) {
                    writeLog(i + "-" + "đủ số lượng không thể đăng ký tiếp")
                    classCodeList[i] = 3;
                    if(!spam) return;
                }
                else {
                    writeLog(i + "-" + res)
                }
            }
            else writeLog(i + "-" + res)
            await sleep(msTime)
            dkhp(i)
    }
    xhr.send();
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function request( url, data, count) {
    if(!runCheck || loginCheck) return;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.onreadystatechange = async function(e) {
        if (xhr.readyState === 4) {
            var res = this.responseText;
            var Scode = this.status;

            if(!runCheck || loginCheck) return;   //Pause

            if (Scode !== 200) {
                writeLog(`Lỗi ${Scode} - ${count}`)
                count++;
            } else if(Scode === 200){
                if(res.includes("Đăng xuất")){
                    writeLog("Đăng nhập thành công", 'success')
                    dkhpRun();
                    loginCheck = true;
                    return;
                }
                else if(res.includes("Chưa đến thời hạn đăng ký học phần")) {
                    writeLog("Chưa đến thời hạn đăng ký học phần - " + count)
                    count++;
                }
                else if(res.includes("Connection Timeout Expired")) {
                    writeLog("Connection Timeout Expired - " + count)
                    count++;
                }
                else{
                    loginErrors.forEach(element => {
                        if(res.includes(element)) {
                            writeLog(element);
                            return;
                        }
                    });
                }
            } else {
                writeLog(`Lỗi ${Scode} - ${count}`)
                count++;
            }
            await sleep(msTime);
            request(url, data, count);
        }
    }
    xhr.ontimeout = function () {
        // Well, it took to long do some code here to handle that
    }
    xhr.open('post', url, true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}

function dkhpRun() {
    for (const [key, value] of Object.entries(classCodeList)) {
        dkhp(key);
    }
}


//Button
async function run() {
    document.getElementById('start').hidden = true;
    document.getElementById('stop').hidden = false;
    runCheck = true;
    var account = getAccount();
    classCodeList = getMHP();
    for(var i = 0; i < 1; i++){
        await request(URL, account, 1);
    }
    while(runCheck){
        await sleep(msTime * Object.keys(classCodeList).length)
        var count = 0;
        for (const [key, value] of Object.entries(classCodeList)) {
            if(value >= 1 && value <=3 ) count++;
        }
        if(count == Object.keys(classCodeList).length) runCheck = false
    }
}

function stop() {
    document.getElementById('stop').hidden = true;
    document.getElementById('start').hidden = false;
    writeLog('Dừng bởi thao tác người dùng');
    runCheck = false;
}

function spamCheck() {
    spam =! spam;
}
function logClear() {
    document.getElementsByClassName('log')[0].innerHTML = '';
}