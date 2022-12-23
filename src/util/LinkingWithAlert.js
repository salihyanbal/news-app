import { Alert, Linking } from "react-native";

export const linkWithAlert = (url) => {
    Alert.alert(
        'Yönlendirmeyi onaylıyor musunuz?',
        url,
        [
            {
                text: 'Iptal',
                onPress: () => {},
            },
            {
                text: 'Yönlendir',
                onPress: () => {
                    Linking.openURL(url);
                            
                },
            },
          
        ],
        { cancelable: true },
    );
}
