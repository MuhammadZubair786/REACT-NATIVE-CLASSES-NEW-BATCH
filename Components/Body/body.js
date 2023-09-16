import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";

function Body({ prop }) {
    return (
        <View style={prop}>
            <Text>Body</Text>
            {/* <Button title="Test" style={{width:10}}></Button> */}
            <Button title="Test" style={{ width: 10 }}></Button>
            <View style={{ width: 100 + "%", alignItems: "center" }}>
                <TouchableOpacity activeOpacity={0.7} style={{
                    backgroundColor: "blue", width: 300,
                    height: 100,
                    justifyContent: "center",
                    // opacity:0.3
                }}>
                    <Text style={{ textAlign: "center", color: "white" }}>CALL</Text>
                </TouchableOpacity>

                <TextInput
                    // multiline={true}
                    secureTextEntry={true}
                    //  keyboardType={'visible-password'}
                    placeholder="enter" />
            </View>

        </View>
    )
}
export default Body