import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  Linking,
} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Feather';

const DATA = [
  {
    name: 'Rainan Araújo',
    personalTitle: 'Passa rodo no baile',
    post: '#2242A7',
  },
  {
    name: 'Pedro Lucas',
    personalTitle: 'Passa rodo no baile',
    post: '#2242A7',
  },
  {
    name: 'Gustavo Enzo',
    personalTitle: 'Passa rodo no baile',
    post: '#2D2C2B',
  },
  {
    name: 'Vinicios Castro',
    personalTitle: 'Passa rodo no baile',
    post: '#97007F',
  },
  {
    name: 'Gabriel Salem',
    personalTitle: 'Passa rodo no baile',
    post: '#97007F',
  },
  {
    name: 'Thiago Franco',
    personalTitle: 'Passa rodo no baile',
    post: '#2D2C2B',
  },
  {
    name: 'Josué Santos',
    personalTitle: 'Passa rodo no baile',
    post: '#2242A7',
  },
  {
    name: 'Rodrigo Salgado',
    personalTitle: 'Passa rodo no baile',
    post: '#2242A7',
  },
  {
    name: 'Pikashu',
    personalTitle: 'Passa rodo no baile',
    post: '#38B124',
  },
];

export default function Members() {
  const [search, setSearch] = useState('');
  const [dataSource, setDataSource] = useState(DATA);
  const SearchFilterFunction = (search) => {
    const newData = DATA.filter(function (item) {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const searchData = search.toUpperCase();
      return itemData.indexOf(searchData) > -1;
    });
    setDataSource(newData);
    setSearch(search);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <View style={styles.titleContent}>
        <Text style={styles.textTitle}>Membros</Text>
        <Text style={styles.textSubTitle}>Associados da Atlética Hidra.</Text>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder="Buscar Membro"
            onChangeText={SearchFilterFunction}
            value={search}
            platform="android"
            round={true}
          />
        </View>
      </View>

      <FlatList
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        data={dataSource}
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
                  size="medium"
                />
                <View>
                  <Text style={styles.textName}>{item.name}</Text>
                  <Text style={styles.textPersonalTitle}>
                    {'<'}
                    {item.personalTitle}
                    {'>'}
                  </Text>
                </View>
              </View>

              <Ripple
                rippleCentered={true}
                rippleOpacity={0.1}
                style={{
                  backgroundColor: item.post,
                  padding: 10,
                  borderRadius: 20,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://api.whatsapp.com/send?phone=5599988179097',
                  )
                }>
                <Icon name={'send'} color="#fff" />
              </Ripple>
            </View>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
