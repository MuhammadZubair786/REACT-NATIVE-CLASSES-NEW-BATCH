import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Text, RadioButton, Button } from 'react-native-paper';
const MyComponent = () => {
    const [showpassword, setshowpassword] = useState(true)
    const [checked, setChecked] = useState('first');
    return (
        <View>
            <TextInput
                mode="outlined"
                style={{ backgroundColor: "white", color: "blue", margin: 20 }}
                label="Email"
                left={<TextInput.Icon icon="email" color={"red"} />}
            />
            <TextInput
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

            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
        </View>


    );
};

export default MyComponent;