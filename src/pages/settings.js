import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
