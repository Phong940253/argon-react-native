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
import firebase from "../config/firebase";

const { width, height } = Dimensions.get("screen");

class Login extends React.Component {
    render() {
        return (
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
                    <Block safe flex middle>
                        <Block style={styles.loginContainer}>
                            <Block
                                flex={0.25}
                                middle
                                style={styles.socialConnect}
                            >
                                <Text color="#8898AA" size={12}>
                                    Đăng nhập với
                                </Text>
                                <Block
                                    row
                                    style={{ marginTop: theme.SIZES.BASE }}
                                >
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
                                            <Text
                                                style={styles.socialTextButtons}
                                            >
                                                GITHUB
                                            </Text>
                                        </Block>
                                    </Button>
                                    <Button
                                        style={styles.socialButtons}
                                        onPress={() => {}}
                                    >
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
                                            <Text
                                                style={styles.socialTextButtons}
                                            >
                                                GOOGLE
                                            </Text>
                                        </Block>
                                    </Button>
                                </Block>
                            </Block>
                            <Block flex>
                                <Block flex={0.17} middle>
                                    <Text color="#8898AA" size={12}>
                                        Hoặc đăng nhập bằng cách
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
                                            style={{ marginBottom: 15 }}
                                        >
                                            <Input
                                                borderless
                                                placeholder="Email"
                                                iconContent={
                                                    <Icon
                                                        size={16}
                                                        color={
                                                            argonTheme.COLORS
                                                                .ICON
                                                        }
                                                        name="ic_mail_24px"
                                                        family="ArgonExtra"
                                                        style={
                                                            styles.inputIcons
                                                        }
                                                    />
                                                }
                                            />
                                        </Block>
                                        <Block width={width * 0.8}>
                                            <Input
                                                password
                                                viewPass
                                                borderless
                                                placeholder="Mật khẩu"
                                                iconContent={
                                                    <Icon
                                                        size={16}
                                                        color={
                                                            argonTheme.COLORS
                                                                .ICON
                                                        }
                                                        name="padlock-unlocked"
                                                        family="ArgonExtra"
                                                        style={
                                                            styles.inputIcons
                                                        }
                                                    />
                                                }
                                            />
                                        </Block>
                                        <Block
                                            row
                                            width={width * 0.75}
                                            marginTop={15}
                                            alignItems="center"
                                        >
                                            <Text
                                                size={14}
                                                style={{ alignSelf: "center" }}
                                            >
                                                Chưa có tài khoản?
                                            </Text>
                                            <Text
                                                style={{
                                                    color: argonTheme.COLORS
                                                        .PRIMARY,
                                                    fontSize: 16,

                                                }}
                                                onPress={() => {
                                                    this.props.navigation.navigate(
                                                        "Register"
                                                    );
                                                }}
                                            >
                                                {" "}
                                                Đăng kí ngay!
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
                                                    color={
                                                        argonTheme.COLORS.WHITE
                                                    }
                                                >
                                                    ĐĂNG NHẬP
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
    }
}

const styles = StyleSheet.create({
    loginContainer: {
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
        paddingBottom: 30,
    },
    createButton: {
        width: width * 0.5,
        marginTop: 25,
    },
});

export default Login;
