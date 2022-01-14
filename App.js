import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      </Text>
      <View style={styles.container}>
      <TextInput placeholder ='entrer un text'/>
    
      <button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    //paddingLeft:1,
    borderWidth:1,
    padding:25,
    borderColor:'red',
    fontSize: 18,
    fontWeight: '',
    textAlign: 'left',
  },
});
