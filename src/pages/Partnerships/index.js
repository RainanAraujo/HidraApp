import React, {useEffect, useState} from 'react';
import {Text, View, StatusBar, SafeAreaView, FlatList} from 'react-native';
import {Avatar} from 'react-native-elements';
import {getAllPartnerships} from '../../services/store';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Partnerships() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await getAllPartnerships());
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <View style={styles.titleContent}>
        <Text style={styles.textTitle}>Parcerias</Text>
        <Text style={styles.textSubTitle}>
          Confira as promoções de nossos parceiros.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log(data);
        }}>
        <Text>TESTE</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{paddingTop: 20}}
        data={data}
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
              <Text style={styles.textPriceBefore}> De R$ por</Text>
              <Text style={styles.textPriceAfter}>R$</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
