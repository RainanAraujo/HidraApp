import React, {useState, useEffect, useRef} from 'react';
import {Picker} from '@react-native-community/picker';
import {Text, View, ScrollView} from 'react-native';
import styles from './styles';
import Input from '../../components/TextInput';

export default function Cadastro() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.textTitle}>Cadastro</Text>
        <Text style={styles.textSubTitle}>
          Adicione suas informações para conhecer-mos melhor sobre você :)
        </Text>
      </View>
      <View>
        <Text style={styles.titleInput}>Nome *</Text>
        <Input keyboardType="name-phone-pad" textContentType="name" />
        <Text style={styles.titleInput}>Sobrenome *</Text>
        <Input keyboardType="name-phone-pad" textContentType="name" />
        <Text style={styles.titleInput}>Nascimento *</Text>
        <View style={{flexDirection: 'row'}}>
          <Picker mode="dropdown" style={{height: 50, width: 100}}>
            <Picker.Item label="Dia" value="java" color="#2F3145" />
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
          </Picker>
          <Picker mode="dropdown" style={{height: 50, width: 100}}>
            <Picker.Item label="Mês" color="#2F3145" />
            <Picker.Item label="Janeiro" value="01" />
            <Picker.Item label="Fevereiro" value="02" />
            <Picker.Item label="Março" value="03" />
            <Picker.Item label="Abril" value="04" />
            <Picker.Item label="Maio" value="05" />
            <Picker.Item label="Junho" value="06" />
            <Picker.Item label="Julho" value="07" />
            <Picker.Item label="Agosto" value="08" />
            <Picker.Item label="Setembro" value="09" />
            <Picker.Item label="Outubro" value="10" />
            <Picker.Item label="Novembro" value="11" />
            <Picker.Item label="Dezembro" value="12" />
          </Picker>
          <Picker mode="dropdown" style={{height: 50, width: 110}}>
            <Picker.Item label="Ano" color="#2F3145" />
            <Picker.Item label="1994" value="1994" />
            <Picker.Item label="1995" value="1995" />
            <Picker.Item label="1996" value="1996" />
            <Picker.Item label="1997" value="1997" />
            <Picker.Item label="1998" value="1998" />
            <Picker.Item label="1999" value="1999" />
            <Picker.Item label="2000" value="2000" />
            <Picker.Item label="2001" value="2001" />
            <Picker.Item label="2002" value="2002" />
            <Picker.Item label="2003" value="2003" />
            <Picker.Item label="2004" value="2004" />
          </Picker>
        </View>
        <Text style={styles.titleInput}>Seu curso *</Text>
        <View style={{flexDirection: 'row'}}>
          <Picker mode="dropdown" style={{height: 50, width: 180}}>
            <Picker.Item label="Nome" value="java" color="#2F3145" />
            <Picker.Item label="Ciência da Computação" value="CC" />
            <Picker.Item label="Ciências Biologicas" value="BIO" />
          </Picker>
          <Picker mode="dropdown" style={{height: 50, width: 130}}>
            <Picker.Item label="Ano" value="java" color="#2F3145" />
            <Picker.Item label="2021" value="2021" />
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2016" value="2016" />
            <Picker.Item label="2015" value="2015" />
          </Picker>
        </View>
      </View>
      <View></View>
    </ScrollView>
  );
}
