import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../Components/Splash';
import SignUp from '../Components/SignUp';
import Home from '../Components/Home';
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HOME"
        options={{
          headerShown:false
        }}
        component={Home} />
        <Drawer.Screen name="Sigin" component={SignUp} />
      </Drawer.Navigator>
    );
  }

export default MyDrawer