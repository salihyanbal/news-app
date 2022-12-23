import React, { useEffect, useState } from "react";
import {Linking, StyleSheet, View, Image, PermissionsAndroid} from "react-native";
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { linkWithAlert } from "../../../util/LinkingWithAlert";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


interface AlbumScreenProps {
}

export default function AlbumScreen() {

    const [photo, setPhoto] = useState("");

    useEffect(() => {
      askForCameraPermission()
    }, []);
    
    const askForCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Kamera İzni",
            message:"Uygulama kameranızı kullanmak istiyor ",
            buttonNeutral: "Daha Sonra Sor",
            buttonNegative: "İptal",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission given");
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }

    const pickImage = () => {
        var options = {

            title: 'Select Image',
      
            customButtons: [
      
              { 
      
                name: 'customOptionKey', 
      
                title: 'Choose file from Custom Option' 
      
              },
      
            ],
      
            storageOptions: {
      
              skipBackup: true,
      
              path: 'images',
      
            },
      
          };
      
          launchImageLibrary(options, res => {
      
            console.log('Response = ', res);
      
            if (res.didCancel) {
      
              console.log('User cancelled image picker');
      
            } else if (res.error) {
      
              console.log('ImagePicker Error: ', res.error);
      
            } else if (res.customButton) {
      
              console.log('User tapped custom button: ', res.customButton);
      
              alert(res.customButton);
      
            } else {
      
                console.log("assets: ", res.assets[0].uri)
              
              setPhoto(res.assets[0])
              console.log("its photo:", photo)
            }
      
          });
    }

    const shootImage = async () => {
        await askForCameraPermission()
        try{
          launchCamera({}, res => {
      
            console.log('Response = ', res);
      
            if (res.didCancel) {
      
              console.log('User cancelled image picker');
      
            } else if (res.error) {
      
              console.log('ImagePicker Error: ', res.error);
      
            } else if (res.customButton) {
      
              console.log('User tapped custom button: ', res.customButton);
      
              alert(res.customButton);
      
            } else if (res.errorCode) {
              console.log("error")
            } 
            else {
                setPhoto(res?.assets[0])
            }
      
          }
          );
        }catch (err){

        }
    }

    return (
        <View>
            <Button onPress={() => pickImage()}>Image Picker</Button>
            <Button onPress={() => shootImage()}>Camera</Button>
            <Card mode="contained">
                <Card.Cover source={{uri: photo.uri}} resizeMode={`cover`} style={{height: 600, width: 400}} />
            </Card>
            
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    }
});