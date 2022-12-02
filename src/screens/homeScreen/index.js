import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from 'react-native-paper';
import * as RootNavigator from "../../util/RootNavigator"
import NewsCard from "./components/newsCard";


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
        <View>
            <Text>Hello</Text>
            <NewsCard></NewsCard>
        </View>

    );
}