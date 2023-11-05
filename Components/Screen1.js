import React from "react";
import {View,Text, Button} from "react-native"

function Screen({navigation}){
    return(
        <View>
            <Text style={{fontSize:30}}>Screen 1 </Text>
            {/* <Button title="HOME" onPress={()=>navigation.navigate("drawer")}></Button> */}
        </View>
    )
}
export default Screen