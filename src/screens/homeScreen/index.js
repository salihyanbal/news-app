import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button, List } from 'react-native-paper';
import * as RootNavigator from "../../util/RootNavigator"
import theme from "../../theme";
import NewsCard from "./components/newsCard";
import NewsList from "./components/newsList";
import { useNavigation } from "@react-navigation/native";
import { ALBUMS } from "../../navigators/routes";


export default function HomeScreen() {
    const [active, setActive] = useState(1);
    const [navOpen, setNavOpen] = useState(false);

    const navigation = useNavigation();

    const toAlbumsPage = () => [
        navigation.navigate(ALBUMS)
    ]
    

    const handleNavOpen = () => {
        setNavOpen(true)
    }

    const handleNavClose = () => {
        setNavOpen(false)
    }

    return (
        <View style={styles.container}>

              <NewsList/>
              <Button onPress={() => toAlbumsPage()}>Albums</Button>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        margin: theme.spacing.l
    },
});

