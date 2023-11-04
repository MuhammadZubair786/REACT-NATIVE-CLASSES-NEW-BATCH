import {View,Text, Button} from 'react-native'
import { Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome6'

function Home({navigation}){
    return(
        <View>
            <Text style={{color:"black"}}>Home page 123</Text>
            <Avatar.Icon size={100} icon="home" />
            {/* <Button title='Open Drawer'
            onPress={()=> navigation.openDrawer()}
            ></Button> */}

        </View>
    )
}

export default Home