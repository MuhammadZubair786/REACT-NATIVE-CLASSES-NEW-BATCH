import {View,Text} from 'react-native'
import {  Avatar } from "react-native-paper"
import React from 'react'

function Splash_Screen({navigation}){

    React.useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("login")
        },1000)
    },[])

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <Avatar.Icon size={100} icon="home" />
            <Text style={{color:"black"}}>Splash Screen</Text>

        </View>
    )
}

export default Splash_Screen