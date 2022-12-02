

import React from "react";
import {View} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


interface NewsCardProps {
}

export default function NewsCard({news}: NewsCardProps) {
    return (
        <Card mode="contained">
            <Card.Title title="Card Title" subtitle="Card Subtitle"/>
            
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    );
}