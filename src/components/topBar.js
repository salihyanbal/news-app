
import { createNavigationContainerRef, useNavigation, useNavigationState } from "@react-navigation/native";
import {useNetInfo} from "@react-native-community/netinfo";
import React from "react";
import { Appbar } from 'react-native-paper';
import { HOME } from "../navigators/routes";


interface TopBarProps {
}

export default function TopBar({}: TopBarProps) {
    const netInfo = useNetInfo();
    const navigationRef = createNavigationContainerRef();
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }
    const screenName = useNavigationState((state) => state?.routes[state.index].name)
    return (
            <Appbar.Header>
                {(screenName && screenName != "LOGIN") ? <Appbar.BackAction onPress={() => goBack()} />: <></>}
                <Appbar.Content title={screenName ? screenName : "LOGIN"} />
                {/* <Appbar.Content title={netInfo.isConnected?.toString()} /> */}
            </Appbar.Header>
    );
}