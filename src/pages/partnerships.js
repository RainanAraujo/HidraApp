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
import {Avatar} from 'react-native-elements';
const DATA = [
  {
    name: 'JR Cabelos',
    neighborhood: 'Avenida Semfim',
    road: 'Rua da dona Neide',
    of: '15,00',
    per: '10,00',
  },
];
export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <FlatList
        contentContainerStyle={{paddingTop: 20}}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.grid}>
            <View style={styles.avatar}>
              <Avatar
                rounded
                source={{
                  uri:
                    'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2019/09/nego-ney-2.jpg',
                }}
                size="large"
              />
              <View>
                <Text style={styles.textInfo}>{item.name}</Text>
                <Text style={styles.textInfo}>{item.neighborhood}</Text>
                <Text style={styles.textInfo}>{item.road}</Text>
              </View>
            </View>

            <View style={styles.pricesContent}>
              <Text style={styles.textPriceBefore}> De {item.of}R$ por</Text>
              <Text style={styles.textPriceAfter}>{item.per}R$</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
    height: 100,
    width: 350,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 2,
  },
  avatar: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  textInfo: {
    color: '#484D55',
    fontFamily: 'Nunito-Regular',
    marginBottom: 3,
    marginLeft: 10,
  },
  textPriceBefore: {
    color: '#FC1818',
    fontFamily: 'Nunito-Regular',
    fontSize: 9,
  },
  textPriceAfter: {
    color: '#38B124',
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
  },
  pricesContent: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
});
