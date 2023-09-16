import { View,Text } from "react-native";

function Home({prop}) {
    console.log(prop)
    return (
        <View style={prop}>
            <Text>Home</Text>
        </View>
    )
}
export default Home