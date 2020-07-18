import React, {useEffect, useState} from 'react';

import {Text, View, ImageBackground} from 'react-native';

import {Avatar} from 'react-native-elements';
import NoobCard from '../../assets/images/noobCard.png';
import VeteranCard from '../../assets/images/veteranCard.png';
import MonitorCard from '../../assets/images/monitorCard.png';
import MainCard from '../../assets/images/mainCard.png';
import {getProfilePic} from '../../services/storage';
import Alerts from '../../utils/alerts';
import styles from './styles';

export default function Card({user, onError}) {
  const [userPic, setUserPic] = useState('');

  function getPostStyle(since, post) {
    var postStyle = {};

    if (post == 'monitor') {
      postStyle.color = '#2D2C2B';
      postStyle.card = MonitorCard;
    } else if (post == 'director') {
      postStyle.color = '#97007F';
      postStyle.card = MainCard;
    } else {
      var years = new Date().getFullYear() - since;
      if (years >= 1) {
        postStyle.color = '#2242A7';
        postStyle.card = VeteranCard;
      } else {
        postStyle.color = '#38B124';
        postStyle.card = NoobCard;
      }
    }
    return postStyle;
  }

  useEffect(() => {
    (async () => {
      try {
        let picURL = await getProfilePic(user.uid);
        setUserPic(picURL);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user]);

  return (
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
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
