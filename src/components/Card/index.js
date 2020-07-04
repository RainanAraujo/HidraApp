import React from 'react';

import {Text, View, ImageBackground} from 'react-native';

import {Avatar} from 'react-native-elements';
import NoobCard from '../../assets/images/noobCard.png';
import VeteranCard from '../../assets/images/veteranCard.png';
import MonitorCard from '../../assets/images/monitorCard.png';
import MainCard from '../../assets/images/mainCard.png';
import styles from './styles';

export default function Card(props) {
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

  return (
    <View style={styles.card}>
      <ImageBackground
        source={getPostStyle(props.data.since, props.data.post).card}
        style={styles.cardBackground}
        resizeMode="contain">
        <Avatar
          rounded
          style={{
            ...styles.avatar,
            borderColor: getPostStyle(props.data.since, props.data.post).color,
          }}
          source={{
            uri: props.avatar,
          }}
          size={123}
        />
        <View style={styles.infoBox}>
          <Text style={styles.nameText}>{props.data.name}</Text>
          <View style={{flex: 1}}>
            <Text style={styles.titleText}>Curso:</Text>
            <Text style={styles.subTitleText}>{props.data.course}</Text>
          </View>
          <View style={styles.inforCardRow}>
            <View style={{flex: 2}}>
              <Text style={styles.titleText}>Ano de associação:</Text>
              <Text style={styles.subTitleText}>{props.data.since}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.titleText}>Idade:</Text>
              <Text style={styles.subTitleText}>{props.data.age} Anos</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
