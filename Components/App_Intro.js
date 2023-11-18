import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: "https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg",
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJX7iGz9Zx7w2XkptdJ_kajrtZUlKDl_gRg&usqp=CAU",
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhzvyZJGYDG-EFUHFEqMdZrdUGV5m02p0vA&usqp=CAU',
        backgroundColor: '#22bcb5',
    }
];

const App = ({ navigation }) => {
    const [showRealApp, setShowRealApp] = useState(false);

    const renderItem = ({ item }) => {
        // console.log(item.image)
        return (
            <View style={styles.slide}>

                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.overlay}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>

            </View>
        );
    }

    const onDone = () => {
        // User finished the introduction. Show the real app by updating state
        // setShowRealApp(true);
        //   console.log(navigation)
        navigation.navigate("home")

    }

    if (showRealApp) {
        return <YourRealAppComponent />;
    } else {
        return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} showSkipButton={true}
            dotStyle={{
                backgroundColor: "blue"
            }}
            activeDotStyle={{
                backgroundColor: "white"
            }}
            renderDoneButton={() =>
                <TouchableOpacity onPress={() => navigation.navigate("drawer")}>
                    <View style={styles.skipButton} >
                        <Text style={styles.skipButtonText}>DONE</Text>
                    </View>
                </TouchableOpacity>

            }

            renderSkipButton={() =>
                <TouchableOpacity onPress={() => navigation.navigate("drawer")}>
                    <View style={styles.skipButton} >
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </View>
                </TouchableOpacity>

            }
            renderNextButton={() =>
                <View style={styles.skipButton}>
                    <Text style={styles.skipButtonText}>Next</Text>
                </View>
            }
        />;
    }
}

const YourRealAppComponent = () => {
    // Replace this with your actual app component
    return (
        <View>
            <Text>Your Real App Component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 35,
        color: 'white',
        marginBottom: 16,
        fontWeight: "bold"
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    skipButton: {
        // backgroundColor: "grey",
        paddingLeft: 10,
        paddingRight: 10,

        borderStyle: "solid",
        borderColor: "orange",
        borderWidth: 1
    },
    skipButtonText: {
        fontSize: 30,
        fontFamily: 'Agbalumo-Regular',
        color: 'orange', // Change the color of the skip button text
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

});

export default App;