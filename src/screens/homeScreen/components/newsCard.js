import React from "react";
import {Image, StyleSheet, View} from "react-native";
import theme from "../../../theme";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import * as RootNavigator from "../../../util/RootNavigator";
import { DETAILS } from "../../../navigators/routes";
import { useNavigation } from "@react-navigation/native";
import PushNotification, {Importance} from 'react-native-push-notification';



interface NewsCardProps {
    news: {}
}

export default function NewsCard({news}: NewsCardProps) {
    

    const navigation = useNavigation();
    const goToDetailsScreen = () => {
      navigation.navigate(DETAILS, {
        news,
      });
    };

    const sendNotification = async function () {

        
        PushNotification.localNotificationSchedule({
            channelId: "first-channel",
            title: "Yeni Haber",
            message: news.title,
            date: new Date(Date.now() + 2 * 1000)
        
            /* Android Only Properties */
        });

    }

    return (

        <Card mode="contained">
            <Card.Title titleStyle={styles.title} title={news.title}/>
            <Card.Content>
                <Image
                    style={styles.image}
                    source={{uri: news.urlToImage}}
                />
                <Paragraph>{news.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button mode="contained" style={styles.input} onPress={() => sendNotification()} >
                        
                        BILDIRIM
                </Button>
                <Button onPress={() => goToDetailsScreen()}>Detaylar</Button>
            </Card.Actions>
        </Card>
    );
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold'
    },
    input: {
        margin: theme.spacing.m,
    }
});