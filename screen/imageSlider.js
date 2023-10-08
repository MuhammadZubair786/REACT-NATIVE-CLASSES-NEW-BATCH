import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKffxFqmxhqUpNVPphFzWpfnIiBFOjpgGIGg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXxHlFLXsjUyp_vTHZP2EYS5ou9Fm1CwCw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ExN4sk1N4L6i0xE83Kjo0Z1AZGCwzAlyZg&usqp=CAU"
]


export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={tw`text-lg bg-red-500 font-bold text-blue-800`}>Hello, Tailwind!</Text>
                <Swiper
                    height={240}
                    dot={
                        <View
                            style={{
                                backgroundColor: 'grey',
                                width: 12,
                                height: 12,
                                borderRadius: 8,
                                margin:3
                               
                            }}
                        />
                    }
                    activeDot={
                        <View
                            style={{
                                backgroundColor: 'red',
                                width: 12,
                                height: 12,
                                borderRadius: 8,
                                margin: 3
                            }}
                        />
                    }
                   autoplay={true}
                   autoplayTimeout={5}
                >
                    {
                        images.map((v, i) => {
                            return <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={{ uri: v }}
                            />
                        })
                    }


                </Swiper>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    }
}