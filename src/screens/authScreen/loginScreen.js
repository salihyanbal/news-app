import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Button, List, TextInput } from 'react-native-paper';
import * as RootNavigator from "../../util/RootNavigator"
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { HOME } from "../../navigators/routes";

var account = {
    "userName": "admin",
    "password": "admin"
}


export default function LoginScreen() {
    const [active, setActive] = useState(1);
    const [navOpen, setNavOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")

    const navigation = useNavigation();
    
    const goToHomeScreen = () => {
      navigation.navigate(HOME);
    }

    const loginAction = () => {
        if(account.userName == userName && account.password == password){
            goToHomeScreen()
        }else{
            Alert.alert(
                "Kullanıcı adı veya şifre yanlış")
        }
    }
    

    const handleNavOpen = () => {
        setNavOpen(true)
    }

    const handleNavClose = () => {
        setNavOpen(false)
    }

    return (
        <View style={styles.container}>
              <TextInput
                style={styles.input}
                label="Username"
                value={userName}
                onChangeText={userName => setUserName(userName)}
                type="outlined"
                />
                <TextInput
                style={styles.input}
                label="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                type="outlined"
                />
                <Button icon="login" mode="contained" style={styles.input} onPress={() => loginAction()} >
                    
                    Login
                </Button>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        margin: theme.spacing.l
    },
    input: {
        margin: theme.spacing.m
    }
});