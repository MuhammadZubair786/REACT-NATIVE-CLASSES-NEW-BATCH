import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import CardData from "./screen/Card";
import ImageSlider from "./screen/imageSlider";
import LoginScreen from "./screen/LoginScreen";




const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function App() {
  return (
    // <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.text}>LIST DATA </Text>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={item => item.id}

        /> */}

        {/* <CardData /> */}
        {/* <ImageSlider /> */}
        <LoginScreen/>
      </View>
    // </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    flex: 1,
    color: "blue",
    fontSize: 30,
    textAlign: "center"
  },
  item: {
    flex: 1,
    backgroundColor: "white",
    margin: 2,
    height: 40,
    padding: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 100,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 35,
  },
  title: {

    color: "black"
  }

})



export default App;