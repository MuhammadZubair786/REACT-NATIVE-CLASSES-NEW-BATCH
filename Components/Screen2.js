import React from "react";
import {View,Text, Button} from "react-native"

function Screen2({navigation}){
    return(
        <View>
            <Text style={{fontSize:30,fontFamily:"Oi-Regular"}}>Screen 2 </Text>
            {/* <Button title="HOME" onPress={()=>navigation.navigate("drawer")}></Button> */}
        </View>
    )
}
export default Screen2