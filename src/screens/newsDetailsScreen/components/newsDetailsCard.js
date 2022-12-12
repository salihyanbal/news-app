import React from "react";
import {Linking, StyleSheet, View} from "react-native";
import theme from "../../../theme";
import { Card, Title, Paragraph, Button } from 'react-native-paper';


interface NewsDetailsCardProps {
    news: {}
}

export default function NewsDetailsCard({news}: NewsDetailsCardProps) {

    const openNewsInSource = () => {
        Linking.openURL(news.url);
    }

    return (
        <Card mode="contained">
            <Card.Cover source={{uri: news.urlToImage}} />
            <Card.Title titleStyle={styles.title} title={news.title}/>
            <Card.Content>
                <Paragraph>{news.content}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => openNewsInSource()}>Kaynakta göster</Button>
            </Card.Actions>
        </Card>
    );
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    }
});