import { useState } from "react";
import { View, Text, Button, TouchableOpacity,StyleSheet } from "react-native";
import {TextInput} from 'react-native-paper'
function Body({ prop }) {

    let [name,setname]=useState()

    return (
        <View style={prop}>
            {/* <Text>Body</Text> */}
            {/* <Button title="Test" style={{width:10}}></Button> */}
            <Button title="Test" style={{margin:20  }} ></Button>
            <View style={{ width: 100 + "%", alignItems: "center",marginTop:20 }}>
                <TouchableOpacity activeOpacity={0.7} 
                onPress={()=>console.log(name)}
                style={{
                    backgroundColor: "blue", width: 300,
                    height: 100,
                    justifyContent: "center",
                    // opacity:0.3
                }}>
                    <Text style={{ textAlign: "center", color: "white" }}>CALL</Text>
                </TouchableOpacity>



            <View>
                
                </View>    
                <TextInput style={styles.inp}
                secureTextEntry={true}
               
               onChangeText={(e)=>console.log(e)}
                // keyboardType={"number-pad"}
                placeholder="Enter Number" />

            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    inp:{
        borderWidth:2,
        borderColor:"red",
        // borderStyle:"dashed",
        borderRadius:10,
        width:200,
        margin:4,
        height:40
    }
})
export default Body