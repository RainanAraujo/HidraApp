import React, {useState, useEffect} from 'react';
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
import PartnerDetails from '../../components/PartnerDetails';
import {getAllPartnerships} from '../../services/store';

export default function Partnerships() {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [detailsData, setDetailsData] = useState({});
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
        <Modal
          notAnimateContent
          animation={'fade'}
          visible={detailsVisible}
          backgroundColor={'#C4C4C442'}>
          <PartnerDetails
            partnerData={detailsData}
            onClose={() => setDetailsVisible(false)}
          />
        </Modal>
        <Text style={styles.textTitle}>Parcerias</Text>
        <Text style={styles.textSubTitle}>
          Confira as promoções de nossos parceiros.
        </Text>
      </View>
      <FlatList
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        contentContainerStyle={{paddingTop: 20}}
        data={data}
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
                <Text style={styles.textPriceBefore}> De R$ por</Text>
                <Text style={styles.textPriceAfter}>R$</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setDetailsData(item);
                setDetailsVisible(true);
              }}
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
