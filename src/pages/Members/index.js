import React, {useState, useEffect} from 'react';
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
import {useSelector} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/Feather';
import {getAllUserData} from '../../services/store';
import {getPostStyle} from '../../utils/tools';
import {getProfilePic} from '../../services/storage';

export default function Members() {
  const [search, setSearch] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const [data, setData] = useState([]);
  const userData = useSelector((state) => state.userData);

  const searchFilterFunction = (search) => {
    console.log(data);
    const newData = data.filter(function (item) {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const searchData = search.toUpperCase();
      return itemData.indexOf(searchData) > -1;
    });
    setDataSource(newData);
    setSearch(search);
  };

  useEffect(() => {
    (async () => {
      const allUserData = await Promise.all(
        (await getAllUserData()).map(async (data) => ({
          ...data,
          pic: await getProfilePic(data.uid),
        })),
      );
      console.log(allUserData);
      setData(allUserData);
      setDataSource(allUserData);
    })();
  }, []);

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
            onChangeText={searchFilterFunction}
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
                <Avatar rounded source={{uri: item.pic}} size="medium" />
                <View>
                  <Text style={styles.textName}>{item.name}</Text>
                  <Text style={styles.textPersonalTitle}>
                    {item.personalTitle ? item.personalTitle : item.class}
                  </Text>
                </View>
              </View>

              {item.contact ? (
                <Ripple
                  rippleCentered={true}
                  rippleOpacity={0.1}
                  style={{
                    backgroundColor: getPostStyle(item).color,
                    padding: 10,
                    borderRadius: 20,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      'https://api.whatsapp.com/send?phone=55' + item.contact,
                    )
                  }>
                  <Icon name={'send'} color="#fff" />
                </Ripple>
              ) : (
                <View
                  style={{
                    backgroundColor: getPostStyle(item).color,
                    paddingHorizontal: 15,
                    paddingVertical: 4,
                    borderRadius: 20,
                  }}
                />
              )}
            </View>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
