import React,{useEffect} from "react";
import { View, Text, Button, Dimensions, StyleSheet, PermissionsAndroid, } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service'
function Screen({ navigation }) {

    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () => {
        console.log()
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
        if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    console.log(latitude, longitude)
                },
                error => {
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
            );
        }

    }


    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 25.4049725,
                    longitude: 68.363399,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}


                style={styles.map} >

                <Marker
                    key={0}
                    coordinate={{ latitude: 25.4049725, longitude: 68.363399 }}
                    title={"SMIT HYDERABAD"}
                    description={"It center"}
                />

            </MapView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.9,
    },
});
export default Screen