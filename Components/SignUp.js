import React from "react";
import {View,Text, Button} from "react-native"

function SignUp({navigation}){
    return(
        <View>
            <Text style={{fontSize:30}}>Sign Up User</Text>
            <Button title="HOME" onPress={()=>navigation.navigate("drawer")}></Button>
        </View>
    )
}
export default SignUp