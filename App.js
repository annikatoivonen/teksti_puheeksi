import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {

  const [thingToSay, setThingToSay] = useState('');

  const speak = () => {
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Type text here..."
      onChangeText={text => setThingToSay(text)}
      value={thingToSay}></TextInput>
      <Button title="PRESS TO HEAR TEXT" onPress={speak} />
      <StatusBar style="auto" />
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
  input: {
    borderWidth: 1,
    margin: 12,
    padding: 10,
    width: 300,
  }
});
