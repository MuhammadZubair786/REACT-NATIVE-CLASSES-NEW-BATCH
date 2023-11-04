import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyComponent from '../Components/Login/LoginScreen';
import Splash_Screen from '../Components/Splash_Screen/splash_screen';
import Home from '../Components/Home/home';
import MainDrawer from '../Components/Home/main_Home';

const Stack = createNativeStackNavigator()
function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='splash'
                    options={{
                        headerShown: false
                    }}
                    component={Splash_Screen}></Stack.Screen>
                <Stack.Screen name='login'
                    options={{
                        headerShown: false
                    }}
                    component={MyComponent}></Stack.Screen>
                <Stack.Screen name='drawer'
                    options={{
                        headerShown: false
                    }}
                    component={MainDrawer}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator