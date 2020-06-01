import React, { useState } from 'react';

import { Text, View, StyleSheet, ImageBackground } from 'react-native';

import { Avatar } from 'react-native-elements';
import NoobCard from '../assets/images/noobCard.png';
import VeteranCard from '../assets/images/veteranCard.png';
import MonitorCard from '../assets/images/monitorCard.png';
import MainCard from '../assets/images/mainCard.png';

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
          style={{ ...styles.avatar, borderColor: getPostStyle(props.data.since, props.data.post).color, }}
          source={{
            uri: props.avatar,
          }}
          size={123}
        />
        <View style={styles.infoBox} >
          <Text style={styles.nameText}>{props.data.name}</Text>
          <View style={{ flex: 1 }} >
            <Text style={styles.titleText}>Curso:</Text>
            <Text style={styles.subTitleText}>{props.data.course}</Text>
          </View>
          <View style={styles.inforCardRow}>
            <View style={{ flex: 2 }}>
              <Text style={styles.titleText}>Ano de associação:</Text>
              <Text style={styles.subTitleText}>{props.data.since}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.titleText}>Idade:</Text>
              <Text style={styles.subTitleText}>{props.data.age} Anos</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  card: {
    aspectRatio: 13 / 12,
    width: '90%',
    height: undefined,
    alignContent: 'flex-end'
  },
  cardBackground: {
    flex: 1,
  },
  avatar: {
    alignSelf: 'center',
    height: '40%',
    aspectRatio: 1 / 1,
    width: undefined,
    borderRadius: 123,
    borderWidth: 4,
    marginTop: '-5%'
  },
  infoBox: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '5%',
    padding: '5%',
    alignItems: 'stretch',
    flex: 1,
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    flex: 1,
    textAlignVertical: 'center'
  },
  subTitleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    flex: 1,
    textAlignVertical: 'center'
  },
  inforCardRow: {
    flexDirection: 'row',
    paddingBottom: '5%',
    paddingTop: '5%',
    flex: 1,
  },
  nameText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
    textAlignVertical: 'center',
    fontSize: 18,
    marginBottom: '5%',
    flex: 1
  },
});
