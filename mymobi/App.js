import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  const [outputText, setText] = useState('Test Native App')
  return (
    <View style={styles.container}>
      <Text>My Mobi</Text>
      <Text>{outputText}</Text>

      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Press me"
        onPress={() => {setText('Text Change')}}
      />
      <Image
          style={styles.tinyLogo}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
      <Button
        title="Revert me"
        onPress={() => {setText('Test Native App')}}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
