import React, {useState} from 'react';

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
import {Divider} from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native';

export default function Settings() {
  const [defaultToggle, setDefaultToggle] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Baixar Código QR</Text>
      </TouchableOpacity>
      <Divider style={{backgroundColor: '#898989'}} />

      <View style={styles.button}>
        <Text style={styles.textButton}>Notificações</Text>
        <View>
          <ToggleSwitch
            isOn={defaultToggle}
            onColor="#38B124"
            offColor="#ecf0f1"
            onToggle={(defaultToggle) => {
              defaultToggle ? setDefaultToggle(true) : setDefaultToggle(false);
            }}
          />
        </View>
      </View>
      <Divider style={{backgroundColor: '#898989'}} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textExitButton}>Sair</Text>
      </TouchableOpacity>
      <Divider style={{backgroundColor: '#898989'}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textButton: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  textExitButton: {
    color: 'red',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
});
