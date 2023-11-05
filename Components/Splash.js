import React, { useEffect } from "react";
import {View,Text} from "react-native"

function Splash({navigation}){

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("signup")
        },3000)
    },[])
    return(
        <View>
            <Text>sPALSH sCREEN</Text>
        </View>
    )
}
export default Splash