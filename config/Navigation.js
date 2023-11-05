import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Components/Splash';
import SignUp from '../Components/SignUp';
import MyDrawer from './Drawer';


const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name='Splash' component={Splash}
                options={{
                    headerShown:false
                }}
                ></Stack.Screen>
                <Stack.Screen  name='signup' component={SignUp}
                options={{
                    headerShown:false
                }}
                ></Stack.Screen>
                 <Stack.Screen  name='drawer' component={MyDrawer}
                options={{
                    headerShown:false
                }}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
