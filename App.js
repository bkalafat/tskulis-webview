import React, { useState, useRef } from 'react';
import {Button, RefreshControl, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const webViewRef = useRef(null)

  const goback = () => {
    webViewRef.current.goBack();
  };

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setSource({ uri: 'https://tskulis.com' })
    wait(2000).then(() => setRefreshing(false));
  }, []);


  const [source, setSource] = useState({ uri: 'https://tskulis.com' })
  return <SafeAreaView style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <WebView ref={webViewRef}  source={source} />
      <Button title="Geri Dön" onPress={goback}></Button>

    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});