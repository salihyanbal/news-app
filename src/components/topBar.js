
import React from "react";
import { Appbar } from 'react-native-paper';


interface TopBarProps {
    backAction: () => void,
    title: String
}

export default function TopBar({handleBackAction, title}: TopBarProps) {
    return (
            <Appbar.Header>
                {handleBackAction && <Appbar.BackAction onPress={() => backAction} />}
                <Appbar.Content title={title ? title : ""} />
            </Appbar.Header>
    );
}