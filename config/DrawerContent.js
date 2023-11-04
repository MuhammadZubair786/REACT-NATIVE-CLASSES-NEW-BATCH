import React from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


var DrawerContentMain = [
    {
        name: "home",
        title: "Home12",
        color: "red",
        path: "Home"
    },
    {
        name: "address-book",
        title: "Contact",
        color: "blue",
        path: "Contact"
    },
    {
        name: "address-book",
        title: "People",
        color: "red",
        path: "Home"
    },
    {
        name: "bahai",
        title: "Setting",
        color: "red",
        path: "Home"
    }
]
function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View>
                    {/* header */}
                    <View>
                        <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu9qZHSRiMOqjbLmZidt10ailLsX9wNTLpe1erMyUs24TZT3y7Bd8J3NVVuga8mMEW5g&usqp=CAU' }} style={{ width: '100%', height: 180, marginTop: '-2%' }}>
                            <Avatar.Image
                            size={80}
                            color="white"
                                source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspS_ukYMLvsWX4vPkC7PcTiCqJYIASaWapw&usqp=CAU"
                                }


                                }
                                style={{  resizeMode: 'contain', marginTop: '12%',marginLeft:"10%" }} />

                            <View style={styles.drawerContent}>
                                <View style={styles.userInfoSection}>

                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                            <Title style={styles.title}>Name:</Title>
                                            <Caption style={styles.caption}>Email</Caption>
                                        </View>
                                    </View>

                                </View>

                            </View>

                        </ImageBackground>
                    </View>


                    <Drawer.Section style={styles.drawerSection} >
                        {
                            DrawerContentMain.map((v, i) => {
                                return (
                                    <DrawerItem
                                        key={i}
                                        icon={({ color, size }) => (
                                            <Icon2
                                                name={v.name}
                                                color={v.color}
                                                size={size}
                                            />

                                        )}
                                        label={v.title}
                                        onPress={() => { props.navigation.navigate(v.path) }}
                                    />
                                )
                            })
                        }



                    </Drawer.Section>


                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

            </Drawer.Section>

        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 10,
    },
    Text: {
        fontWeight: 'bold',
        color: 'red'

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: '-15%',
        marginLeft: '10%'
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: '10%'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 10,

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContent