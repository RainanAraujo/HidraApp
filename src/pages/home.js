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
import IconHidra from '../assets/images/iconHidra.png';
import {Avatar} from 'react-native-elements';
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.profileContainer}>
        <Text style={styles.textWelcome}>Olá Híbrido!</Text>
        <View>
          <View style={styles.avatar}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2019/09/nego-ney-2.jpg',
              }}
              size="xlarge"
              containerStyle={{borderWidth: 5, borderColor: '#ffffff'}}
            />
          </View>

          <View style={styles.card}>
            <Image style={styles.iconHidra} source={IconHidra} />

            <Text style={styles.nameText}>Nego Ney de Arruda Brito</Text>
            <Text style={styles.titleText}>Curso:</Text>
            <Text style={styles.subTitleText}>Ciência da Computação</Text>
            <View style={styles.inforCardRow}>
              <View>
                <Text style={styles.titleText}>Ano de associação:</Text>
                <Text style={styles.subTitleText}>2020</Text>
              </View>
              <View>
                <Text style={styles.titleText}>Idade</Text>
                <Text style={styles.subTitleText}>12 Anos</Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.7} style={styles.qrCodeButton}>
              <Image />
            </TouchableOpacity>
            <Text style={styles.qrCodeText}>Acesse aqui o QR CODE</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.scanButton}>
          <Text style={styles.textButton}>Escanear Híbrido</Text>
        </TouchableOpacity>
      </View>
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
