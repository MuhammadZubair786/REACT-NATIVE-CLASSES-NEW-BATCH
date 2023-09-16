import { Text, View, StyleSheet, Image } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./Components/Home/home";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    // <SafeAreaView style={styles.main}>

    //   <View style={styles.header}>
    //     {/* <Text >Header</Text> */}
    //     <Image
    //       style={{ objectFit: "contain" }}
    //       source={require("./assets/download.png")} >

    //     </Image>
    //   </View>
    //   <View style={styles.body}>
    //     {/* <Text >Body</Text> */}

    //     {/* internet image */}
    //     {/* <Image
    //       // style={{width:100+"%",height:100+"%"}}
    //       source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXJE92JV-UPyfnDJ8LbDhGggCRmbg6KJ63w&usqp=CAU"}}></Image> */}
    //     {/* <Image
    //       style={{ objectFit: "contain" }}
    //       source={require("./assets/download.png")} ></Image> */}
    //   </View>
    //   <View style={styles.footer} >
    //     <Text >Footer</Text>
    //   </View>

    //   {/* <View style={{ flex: 2 }}>
    //     <Text>testing</Text>
    //   </View> */}

    // </SafeAreaView>

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main}>
        <Home prop={styles.header} />
        <Body prop={styles.body} />
        <Footer prop={styles.footer} />
      </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "white"
  },
  header: {
    overflow: "hidden",
    backgroundColor: "blue",
    color: "white",
    flex: 10,
    justifyContent: "center"
  },
  body: {
    backgroundColor: "yellow",
    color: "white",
    flex: 20,
    justifyContent: "center"
  },
  footer: {
    backgroundColor: "orange",
    color: "white",
    flex: 10,
    justifyContent: "center"
  }
})

export default App