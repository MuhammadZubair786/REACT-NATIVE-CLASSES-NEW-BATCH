import axios from "axios"
import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { ActivityIndicator, MD2Colors, Avatar, Divider, Button, Card, Text } from "react-native-paper"
import Icon from 'react-native-vector-icons/FontAwesome';
import FBICON from 'react-native-vector-icons/AntDesign'
function CardData() {

    let [productData, setproductData] = useState([])


    useEffect(() => {
        getproduct()
    }, [])

    const getproduct = async () => {
        await axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setproductData(res.data)
                console.log(res.data[0])
            })
            .catch((e) => console.log(e))

    }
    return (
        <View style={{ flex: 1 }}>
            <Avatar.Text size={100} label="XD" />
            <Avatar.Icon size={24} icon="home" />
            <Divider theme={{ colors: 'green' }} />
            <Icon name="search-plus" size={100} color="#900" />
            <FBICON name="search1" size={100} color="#900" />
            <Text style={styles.text}>LIST DATA </Text>
            {
                productData.length == 0 ?
                    <ActivityIndicator animating={true} color={MD2Colors.red800}
                        size={100}
                    />
                    :
                    <FlatList
                        data={productData}
                        renderItem={({ item }) =>
                            <Card>
                                <Card.Title title={item.title} subtitle="Card Subtitle" />
                                <Card.Content>
                                    <Avatar.Image size={100} source={{ uri: item.image }} />
                                    <Text variant="bodyMedium">{item.description}</Text>
                                </Card.Content>
                                <Card.Cover source={{ uri: item.image }} />
                                <Card.Actions>
                                    <Button>Cancel</Button>
                                    <Button>Ok</Button>
                                </Card.Actions>
                            </Card>}
                        keyExtractor={item => item.id}
                    />
            }


        </View>
    )

}


const styles = StyleSheet.create({
    text: {
        // flex: 1,
        color: "blue",
        fontSize: 30,
        textAlign: "center"
    },
})

export default CardData