import React, {useState} from 'react';
import {Text, View, StatusBar, SafeAreaView, FlatList} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import styles from './styles';
import {SearchBar} from 'react-native-elements';
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
  const [search, setSearch] = useState();
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
            onChangeText={setSearch}
            value={search}
            platform="android"
            round={true}
          />
        </View>
      </View>

      <FlatList
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
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
              <View style={{...styles.post, backgroundColor: item.post}} />
            </View>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
