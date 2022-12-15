import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button, List } from 'react-native-paper';
import * as RootNavigator from "../../util/RootNavigator"
import theme from "../../theme";
import NewsCard from "./components/newsCard";
import NewsList from "./components/newsList";


export default function HomeScreen() {
    const [active, setActive] = useState(1);
    const [navOpen, setNavOpen] = useState(false);

    

    const handleNavOpen = () => {
        setNavOpen(true)
    }

    const handleNavClose = () => {
        setNavOpen(false)
    }

    return (
        <View style={styles.container}>
              <NewsList/>
              <Text>Recycler View</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        margin: theme.spacing.l
    },
});

