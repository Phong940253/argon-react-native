import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import { Card, Input } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
    RegisterHCMUE = () => {
        return (
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                <Input
                right
                placeholder="Icon Right"
                iconContent={
                    <Icon
                    size={11}
                    color={argonTheme.COLORS.ICON}
                    name="search-zoom-in"
                    family="ArgonExtra"
                    />
                }
                />
            </Block>
        )
    }
    render (
        <Block flex center style={styles.home}>
                {this.renderArticles()}
            </Block>
    )
}

const styles = StyleSheet.create({
    home: {
        width: width,
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE,
    },
});

export default Home;

// v9lFjxSUefXHFumlk3+50ft5gBiiiD/iUHyBy4e6+a6DZSeRWJra6P7UYET1r8Y+yzqME8PzQD4=         2111COMP104601
// v9lFjxSUefXHFumlk3 50ft5gBiiiD/iUHyBy4e6 a6DZSeRWJra6P7UYET1r8Y yzqME8PzQD4=|
// v9lFjxSUefVMiknmyxXmoQX1iSPof o71iXbQ4RYx4Q8LtMtkA2P38w9SJb1oq9gpPDo9IGK9yI=|    header 2111COMP131501
// v9lFjxSUefVMiknmyxXmoQX1iSPof+o71iXbQ4RYx4Q8LtMtkA2P38w9SJb1oq9gpPDo9IGK9yI=     value in dom
// MjExMUNPTVAxMDQ2MDEkMC4wJDIxMTFDT01QMTA0NjAxJCQw
