import React, { useRef } from 'react';
import { StatusBar, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {

  const webViewRef = useRef(null)

  const goback = () => {
    webViewRef.current.goBack();
  };

  return <SafeAreaView style={styles.container}>
    <WebView ref={webViewRef} source={{ uri: 'https://tskulis.com' }} />
    <TouchableOpacity  onPress={goback} on style={styles.button}>
      <Text>geri</Text>
    </TouchableOpacity>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width:40,
    marginHorizontal:20,
    borderRadius:9
  },
})