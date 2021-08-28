import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("screen");

let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
let mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

const Register = () => {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [rePassword, setRePassword] = React.useState();
    const [strengthBadge, setStrengthBadge] = React.useState("yếu");
    const [colorBadge, setColorBadge] = React.useState(argonTheme.COLORS.ERROR);

    return (
        <Block flex middle>
            <StatusBar hidden />
            <ImageBackground
                source={Images.RegisterBackground}
                style={{ width, height, zIndex: 1 }}
            >
                <Block safe flex middle>
                    <Block style={styles.registerContainer}>
                        <Block flex={0.25} middle style={styles.socialConnect}>
                            <Text color="#8898AA" size={12}>
                                Đăng kí với
                            </Text>
                            <Block row style={{ marginTop: theme.SIZES.BASE }}>
                                <Button
                                    style={{
                                        ...styles.socialButtons,
                                        marginRight: 30,
                                    }}
                                >
                                    <Block row>
                                        <Icon
                                            name="logo-github"
                                            family="Ionicon"
                                            size={14}
                                            color={"black"}
                                            style={{
                                                marginTop: 2,
                                                marginRight: 5,
                                            }}
                                        />
                                        <Text style={styles.socialTextButtons}>
                                            GITHUB
                                        </Text>
                                    </Block>
                                </Button>
                                <Button style={styles.socialButtons}>
                                    <Block row>
                                        <Icon
                                            name="logo-google"
                                            family="Ionicon"
                                            size={14}
                                            color={"black"}
                                            style={{
                                                marginTop: 2,
                                                marginRight: 5,
                                            }}
                                        />
                                        <Text style={styles.socialTextButtons}>
                                            GOOGLE
                                        </Text>
                                    </Block>
                                </Button>
                            </Block>
                        </Block>
                        <Block flex>
                            <Block flex={0.17} middle>
                                <Text color="#8898AA" size={12}>
                                    Hoặc đăng kí bằng cách
                                </Text>
                            </Block>
                            <Block flex center>
                                <KeyboardAvoidingView
                                    style={{ flex: 1 }}
                                    behavior="padding"
                                    enabled
                                >
                                    <Block
                                        width={width * 0.8}
                                        style={{ marginBottom: 10 }}
                                    >
                                        <Input
                                            borderless
                                            placeholder="Tên"
                                            iconContent={
                                                <Icon
                                                    size={16}
                                                    color={
                                                        argonTheme.COLORS.ICON
                                                    }
                                                    name="hat-3"
                                                    family="ArgonExtra"
                                                    style={styles.inputIcons}
                                                />
                                            }
                                            value={name}
                                            onChangeText={(text) =>
                                                setName(text)
                                            }
                                        />
                                    </Block>
                                    <Block
                                        width={width * 0.8}
                                        style={{ marginBottom: 10 }}
                                    >
                                        <Input
                                            borderless
                                            placeholder="Email"
                                            iconContent={
                                                <Icon
                                                    size={16}
                                                    color={
                                                        argonTheme.COLORS.ICON
                                                    }
                                                    name="ic_mail_24px"
                                                    family="ArgonExtra"
                                                    style={styles.inputIcons}
                                                />
                                            }
                                            value={email}
                                            onChangeText={(text) =>
                                                setEmail(text)
                                            }
                                        />
                                    </Block>
                                    <Block
                                        width={width * 0.8}
                                        style={{ marginBottom: 10 }}
                                    >
                                        <Input
                                            password
                                            viewPass
                                            borderless
                                            placeholder="Mật khẩu"
                                            iconContent={
                                                <Icon
                                                    size={16}
                                                    color={
                                                        argonTheme.COLORS.ICON
                                                    }
                                                    name="padlock-unlocked"
                                                    family="ArgonExtra"
                                                    style={styles.inputIcons}
                                                />
                                            }
                                            value={password}
                                            onChangeText={(text) => {
                                                if (strongPassword.test(text)) {
                                                    setStrengthBadge("mạnh");
                                                    setColorBadge(
                                                        argonTheme.COLORS
                                                            .SUCCESS
                                                    );
                                                } else if (
                                                    mediumPassword.test(text)
                                                ) {
                                                    setStrengthBadge(
                                                        "trung bình"
                                                    );
                                                    setColorBadge(
                                                        argonTheme.COLORS
                                                            .WARNING
                                                    );
                                                } else {
                                                    setStrengthBadge("yếu");
                                                    setColorBadge(
                                                        argonTheme.COLORS.ERROR
                                                    );
                                                }
                                                setPassword(text);
                                            }}
                                        />
                                    </Block>
                                    <Block width={width * 0.8}>
                                        <Input
                                            password
                                            viewPass
                                            borderless
                                            placeholder="Nhập lại mật khẩu"
                                            iconContent={
                                                <Icon
                                                    size={16}
                                                    color={
                                                        argonTheme.COLORS.ICON
                                                    }
                                                    name="padlock-unlocked"
                                                    family="ArgonExtra"
                                                    style={styles.inputIcons}
                                                />
                                            }
                                            value={rePassword}
                                            onChangeText={(text) => {
                                                setRePassword(text);
                                            }}
                                        />
                                        <Block row style={styles.passwordCheck}>
                                            <Text
                                                size={12}
                                                color={argonTheme.COLORS.MUTED}
                                            >
                                                độ mạnh mật khẩu:
                                            </Text>
                                            <Text
                                                bold
                                                size={12}
                                                color={colorBadge}
                                            >
                                                {" "}
                                                {strengthBadge}
                                            </Text>
                                        </Block>
                                    </Block>
                                    <Block
                                        row
                                        width={width * 0.75}
                                        height={30}
                                        flex
                                        alignItems="center"
                                    >
                                        <Checkbox
                                            checkboxStyle={{
                                                borderWidth: 3,
                                            }}
                                            color={argonTheme.COLORS.PRIMARY}
                                            label="Tôi đồng ý với các "
                                        />
                                        <Text
                                            style={{
                                                color: argonTheme.COLORS
                                                    .PRIMARY,
                                                fontSize: 14,
                                            }}
                                            onPress={() => {}}
                                        >
                                            {" "}
                                            Điều Khoản
                                        </Text>
                                    </Block>
                                    <Block middle>
                                        <Button
                                            color="primary"
                                            style={styles.createButton}
                                        >
                                            <Text
                                                bold
                                                size={14}
                                                color={argonTheme.COLORS.WHITE}
                                                onPress={() => {
                                                    let message = "";
                                                    let valid = true;
                                                    if (
                                                        name == null ||
                                                        email == null ||
                                                        password == null ||
                                                        rePassword == null
                                                    ) {
                                                        message =
                                                            "Không được để trống các ô!";
                                                        valid = false;
                                                    } else if (
                                                        password != rePassword
                                                    ) {
                                                        message =
                                                            "Nhập lại mật khẩu không khớp!";
                                                        valid = false;
                                                    }

                                                    if (!valid)
                                                        Toast.show({
                                                            type: "error",
                                                            text1: message,
                                                            topOffset: 30,
                                                            bottomOffset: 40,
                                                        });
                                                }}
                                            >
                                                TẠO TÀI KHOẢN
                                            </Text>
                                        </Button>
                                    </Block>
                                </KeyboardAvoidingView>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </ImageBackground>
        </Block>
    );
};

const styles = StyleSheet.create({
    registerContainer: {
        width: width * 0.9,
        height: height * 0.875,
        backgroundColor: "#F4F5F7",
        borderRadius: 4,
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden",
    },
    socialConnect: {
        backgroundColor: argonTheme.COLORS.WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#8898AA",
    },
    socialButtons: {
        width: 120,
        height: 40,
        backgroundColor: "#fff",
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    socialTextButtons: {
        color: argonTheme.COLORS.PRIMARY,
        fontWeight: "800",
        fontSize: 14,
    },
    inputIcons: {
        marginRight: 12,
    },
    passwordCheck: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 15,
    },
    createButton: {
        width: width * 0.5,
        marginTop: 25,
    },
});

export default Register;
