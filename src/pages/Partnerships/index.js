import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import {Modal} from '../../components/Modal';
import PartnershipsPopUp from '../../components/PartnershipsPopUp';
const DATA = [
  {
    name: 'JR Cabelos',
    neighborhood: 'Avenida Semfim',
    road: 'Rua da dona Neide',
    of: '15,00',
    per: '10,00',
  },
  {
    name: 'JR Cabelos',
    neighborhood: 'Avenida Semfim',
    road: 'Rua da dona Neide',
    of: '15,00',
    per: '10,00',
  },
];

export default function Profile() {
  const [isMoreInfo, setMoreInfo] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <View style={styles.titleContent}>
        <Modal
          animation={'fade'}
          visible={isMoreInfo}
          backgroundColor={'#C4C4C442'}>
          <PartnershipsPopUp onClose={() => setMoreInfo(false)} />
        </Modal>

        <Text style={styles.textTitle}>Parcerias</Text>
        <Text style={styles.textSubTitle}>
          Confira as promoções de nossos parceiros.
        </Text>
      </View>
      <FlatList
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        contentContainerStyle={{paddingTop: 20}}
        data={DATA}
        renderItem={({item}) => (
          <>
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
            <TouchableOpacity
              onPress={() => setMoreInfo(true)}
              style={styles.buttonMoreInfo}>
              <Text style={styles.textButtonMoreInfo}> Mais Informações</Text>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
