import React from "react";
import {View,Text, Button} from "react-native"
import Bottom from "../config/Bottom";
import CustomBar from "../config/MainBottom";

function Home({navigation}){
    console.log(navigation)
    return(
    //    <Bottom navigation={navigation}/>
    <CustomBar/>

    )
}
export default Home