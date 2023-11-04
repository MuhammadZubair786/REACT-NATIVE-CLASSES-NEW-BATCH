import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Components/Home/home';
import Splash_Screen from '../Components/Splash_Screen/splash_screen';
import DrawerContent from './DrawerContent';
import Contact from '../Components/Home/Contact';


const Drawers = createDrawerNavigator()


function Home_Darwer(){
    return(
        <Drawers.Navigator drawerContent={props =><DrawerContent {...props} />}>
            <Drawers.Screen name='Home' component={Home}
            // options={{
            //     headerShown:false
            // }}
            />
            <Drawers.Screen name='Contact'
            //   options={{
            //     headerShown:false
            // }}
            component={Contact}/>


        </Drawers.Navigator>

    )
}

export default Home_Darwer