import React, {useEffect, useState} from 'react';

import {Text, View, ImageBackground} from 'react-native';

import {Avatar} from 'react-native-elements';
import {getProfilePic} from '../../services/storage';
import {calculateAge, getPostStyle} from '../../utils/tools';
import styles from './styles';

export default function Card({user, onError}) {
  const [userPic, setUserPic] = useState('');

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      (async () => {
        try {
          let picURL = await getProfilePic(user.uid);
          setUserPic(picURL);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user]);

  return (
<<<<<<< HEAD
    Object.keys(user).length > 0 && (
      <View style={styles.card}>
        <ImageBackground
          source={getPostStyle(user).card}
          style={styles.cardBackground}
          resizeMode="contain">
          <Avatar
            rounded
            style={{
              ...styles.avatar,
              borderColor: getPostStyle(user).color,
            }}
            source={{
              uri: userPic,
            }}
            size={123}
          />
          <View style={styles.infoBox}>
            <Text style={styles.nameText}>
              {user.name + ' ' + user.lastName}
            </Text>
            <View style={{flex: 1}}>
              <Text style={styles.titleText}>Classe:</Text>
              <Text style={styles.subTitleText}>{user.class}</Text>
            </View>
            <View style={styles.infoCardRow}>
              <View style={{flex: 2}}>
                <Text style={styles.titleText}>Ano de associação:</Text>
                <Text style={styles.subTitleText}>{user.since}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.titleText}>Idade:</Text>
                <Text style={styles.subTitleText}>
                  {calculateAge(user.dateBirth)} Anos
                </Text>
              </View>
=======
    <View style={styles.card}>
      <ImageBackground
        source={getPostStyle(user.since, user.post).card}
        style={styles.cardBackground}
        resizeMode="contain">
        <Avatar
          rounded
          style={{
            ...styles.avatar,
            borderColor: getPostStyle(user.since, user.post).color,
          }}
          source={{
            uri: userPic,
          }}
          size={123}
        />
        <View style={styles.infoBox}>
          <Text style={styles.nameText}>{user.name}</Text>
          <View style={{flex: 1}}>
            <Text style={styles.titleText}>Curso:</Text>
            <Text style={styles.subTitleText}>{user.course}</Text>
          </View>
          <View style={styles.inforCardRow}>
            <View style={{flex: 2}}>
              <Text style={styles.titleText}>Turma:</Text>
              <Text style={styles.subTitleText}>{user.class}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.titleText}>Nascimento:</Text>
              <Text style={styles.subTitleText}>{user.dateBirth}</Text>
>>>>>>> 40b0c122f8967210a402993d06a8462fcb9035d8
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  );
}
