import React, { useState } from 'react';
import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};


export default function App() {
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [usertype, setUsertype] = useState('');

  return (
    <View style={styles.container}>

        <Text>User Type:</Text>
        <RNPickerSelect
            onValueChange={(value) => setUsertype(value)}
            items={[
                { label: 'Admin', value: 'admin' },
                { label: 'Guest', value: 'guest' }
            ]}
        />




        <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
        <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

        <TouchableOpacity onPress={ () => ToastAndroid.show(`Welcome! ${usertype} ${name}`, ToastAndroid.SHORT) }>
            <Text>LOG IN</Text>
        </TouchableOpacity>

        <Text>{pw}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'right',
    justifyContent: 'center',
  },
});
