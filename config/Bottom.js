import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Screen from '../Components/Screen1';
import Screen2 from '../Components/Screen2';
const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Screen_1" component={Screen} />
        <Tab.Screen name="Screen_2" component={Screen2} />
      </Tab.Navigator>
    );
  }

  export default MyTabs