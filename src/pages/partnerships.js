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
} from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: 'center',
  },
  textWelcome: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 36,
    marginTop: 10,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#38B124',
    width: 320,
    height: 200,
    borderRadius: 20,
    paddingTop: 20,
  },
  iconHidra: {
    position: 'absolute',
    right: 0,
    marginTop: 5,
    marginRight: 5,
  },
  avatar: {
    alignItems: 'center',
    marginBottom: -30,
    zIndex: 1,
  },
  scanButton: {
    marginTop: 30,
    backgroundColor: '#2343A9',
    height: 50,
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeButton: {
    marginTop: -30,
    backgroundColor: '#ffffff',
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCodeText: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'center',
  },
  textButton: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
  },
  subTitleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    marginLeft: 20,
  },
  inforCardRow: {
    flexDirection: 'row',
  },
  nameText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
  },
});
