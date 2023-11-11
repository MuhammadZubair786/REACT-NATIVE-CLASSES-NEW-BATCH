import React, { useEffect } from "react";
import { View, Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash({ navigation }) {

    useEffect(() => {

       



        setTimeout(async () => {
          let  data =await   AsyncStorage.getItem("user")
          console.log(data)
          if(data=="true"){

            navigation.replace("signup")

          }
          else{
            await  AsyncStorage.setItem("user","true")
            navigation.replace("appintro")
          }


        
        }, 3000)
    }, [])
    return (
        <View>
            <Text>sPALSH sCREEN</Text>
        </View>
    )
}
export default Splash