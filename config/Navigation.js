import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardData from '../screen/Card';
import MyComponent from '../screen/LoginScreen';
import Splash_Screen from '../Components/Splash_Screen/splash_screen';

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

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator