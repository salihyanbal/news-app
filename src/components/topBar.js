
import { createNavigationContainerRef, useNavigation, useNavigationState } from "@react-navigation/native";
import React from "react";
import { Appbar } from 'react-native-paper';
import { HOME } from "../navigators/routes";


interface TopBarProps {
}

export default function TopBar({}: TopBarProps) {
    const navigationRef = createNavigationContainerRef();
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }
    const screenName = useNavigationState((state) => state?.routes[state.index].name)
    return (
            
            <Appbar.Header>
                {(screenName && screenName != "HOME") ? <Appbar.BackAction onPress={() => goBack()} />: <></>}
                <Appbar.Content title={screenName ? screenName : "HOME"} />
            </Appbar.Header>
    );
}