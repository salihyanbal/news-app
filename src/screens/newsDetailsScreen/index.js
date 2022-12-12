import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button, List } from 'react-native-paper';
import * as RootNavigator from "../../util/RootNavigator"
import theme from "../../theme";
import { useRoute } from "@react-navigation/native";
import NewsDetailsCard from "./components/newsDetailsCard";


export default function NewsDetailsScreen() {
    const [active, setActive] = useState(1);
    const [navOpen, setNavOpen] = useState(false);

    const route = useRoute();
    const news = route.params.news

    const handleNavOpen = () => {
        setNavOpen(true)
    }

    const handleNavClose = () => {
        setNavOpen(false)
    }

    return (
        <View style={styles.container}>
              <NewsDetailsCard news={news}/>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        margin: theme.spacing.l
    },
});

