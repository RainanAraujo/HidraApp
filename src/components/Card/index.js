import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Avatar} from 'react-native-elements';
import {calculateAge, getPostStyle} from '../../utils/tools';
import styles from './styles';

export default function Card({user, onError}) {
  function CourseUser(classType) {
    if (classType.charAt(0) == 'C') {
      return 'Ciência da Computação';
    } else {
      return 'Ciências Biológicas';
    }
  }

  return (
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
              uri: user.pic,
            }}
            size={123}
          />
          <View style={styles.infoBox}>
            <Text style={styles.nameText}>{user.name}</Text>
            <View style={styles.infoCardRow}>
              <View style={{flex: 2}}>
                <Text style={styles.titleText}>Curso:</Text>
                <Text style={styles.subTitleText}>
                  {CourseUser(user.class)}
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.titleText}>Nascimento:</Text>
                <Text style={styles.subTitleText}>{user.dateBirth}</Text>
              </View>
            </View>
            <View style={styles.infoCardRow}>
              <View style={{flex: 2}}>
                <Text style={styles.titleText}>Classe:</Text>
                <Text style={styles.subTitleText}>{user.class}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.titleText}>Idade:</Text>
                <Text style={styles.subTitleText}>
                  {calculateAge(user.dateBirth)} Anos
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  );
}
