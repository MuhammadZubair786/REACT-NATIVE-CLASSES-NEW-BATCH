import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { TextInput, Text, RadioButton, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar';

const MyComponent = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    const [showpassword, setshowpassword] = useState(true)
    const [checked, setChecked] = useState('first');

    const createEmailPassword=()=>{
        if(email=="" ){
            Snackbar.show({
                text: 'Plz Enter Email Address',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:"grey",
                textColor:"red"
              });
        }
        else if(password=="" ){
            Snackbar.show({
                text: 'Plz Enter Password',
                duration: Snackbar.LENGTH_SHORT,
                margin:20,
                backgroundColor:"grey",
                textColor:"white"
              });
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
            Snackbar.show({
                text: 'Plz Enter Valid Email',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:"grey",
                textColor:"red"
              });

        }
        else if(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)==false){
            Snackbar.show({
                text: 'Plz valid password',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:"grey",
                textColor:"red"
              });
        }

        else{
            console.log(email)
            auth().createUserWithEmailAndPassword(email,password)
            .then((res)=>{
                console.log(res.user.uid)
            })
            .catch((err)=>{
               if(err.code=="auth/email-already-in-use"){
                Alert.alert("Email ALready regsiter",
                )
               }
            })
        }

    }

    return (
        <View>
            <TextInput

            onChangeText={(e)=>setEmail(e)}
            value={email}
                mode="outlined"
                style={{ backgroundColor: "white", color: "blue", margin: 20 }}
                label="Email"
                left={<TextInput.Icon icon="email" color={"red"} />}
            />
            <TextInput
            value={password}
            onChangeText={(e)=>setPassword(e)}
                mode="outlined"
                style={{ backgroundColor: "white", color: "blue", marginVertical: 2, marginHorizontal: 20 }}
                label="Password"
                secureTextEntry={showpassword}
                left={<TextInput.Icon icon="lock" color={"red"} />}
                right={
                    showpassword ?
                        <TextInput.Icon icon="eye" color={"red"} onPress={() => setshowpassword(false)} />
                        :
                        <TextInput.Icon icon="eye-off" color={"red"} onPress={() => setshowpassword(true)} />

                }
            />
            <Text style={{ marginTop: 30 }}>Select Gender</Text>
            <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                <RadioButton.Item label="MALE" value="first" />
                <RadioButton.Item label="FEMALE" value="second" />
            </RadioButton.Group>

            <Button icon="camera" mode="contained" onPress={() => createEmailPassword()}>
                Press me
            </Button>
            {/* <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar> */}
        </View>


    );
};

export default MyComponent;