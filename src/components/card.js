import React, {useState} from 'react';

import {Text, View, StyleSheet, ImageBackground} from 'react-native';

import {Avatar} from 'react-native-elements';

export default function Card(props) {
  return (
    <>
      <View>
        <View style={styles.avatar}>
          <Avatar
            rounded
            source={{
              uri: props.avatar,
            }}
            size={123}
            containerStyle={{
              borderWidth: 5,
              borderColor: props.color,
            }}
          />
        </View>
        <View style={styles.cardImage}>
          <ImageBackground
            source={props.card}
            style={styles.cardBackground}
            resizeMode="contain">
            <Text style={styles.nameText}>{props.name}</Text>
            <Text style={styles.titleText}>Curso:</Text>
            <Text style={styles.subTitleText}>{props.course}</Text>
            <View style={styles.inforCardRow}>
              <View>
                <Text style={styles.titleText}>Ano de associação:</Text>
                <Text style={styles.subTitleText}>{props.since}</Text>
              </View>
              <View>
                <Text style={styles.titleText}>Idade</Text>
                <Text style={styles.subTitleText}>{props.age} Anos</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingTop: 55,
    aspectRatio: 4 / 5,
    width: '90%',
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    alignItems: 'center',
    marginBottom: -200,
    zIndex: 1,
  },

  titleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
  },
  subTitleText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    marginLeft: 20,
  },
  inforCardRow: {
    flexDirection: 'row',
  },
  nameText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginTop: 40,
    marginLeft: 20,
  },
});
