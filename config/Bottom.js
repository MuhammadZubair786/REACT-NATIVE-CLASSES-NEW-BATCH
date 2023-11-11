import * as React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen from '../Components/Screen1';
import Screen2 from '../Components/Screen2';
import Icon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const Tab = createBottomTabNavigator();


function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "yellow",

        // tabBarStyle: { position: 'absolute', bottom: 100 },
        // tabBarActiveBackgroundColor: "grey",
        // tabBarInactiveBackgroundColor: "blue",
        headerTitle: (props) => <View>
          <Text>gfdgf</Text>
          <Icon name="menu-unfold" size={30} color="black"
            onPress={() => navigation.openDrawer()}
          />
        </View>

      }}
    >
      <Tab.Screen name="Screen_1"
        options={{

          tabBarIcon: ({ focused }) => {
            console.log(focused)
            return (<View>
              <Entypo name="user" size={30} color={focused ? "red" : "yellow"} />
            </View>
            )
          }


        }}
        component={Screen} />
      <Tab.Screen name="Screen_3"
        options={{

          tabBarIcon: ({ focused }) => {
            console.log(focused)
            return (<View>
              <Entypo name="user" size={30} color={focused ? "red" : "yellow"} />
            </View>
            )
          }


        }}
        component={Screen} />
      <Tab.Screen name="Screen_2"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<View>
              <Entypo name="user" size={30} color={focused ? "red" : "yellow"} />
            </View>
            )
          }
        }}
        component={Screen2} />
    </Tab.Navigator>
  );
}

export default MyTabs