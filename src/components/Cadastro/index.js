import React, {useState, useEffect, useRef} from 'react';
import {Picker} from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';
import {Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import Input from '../../components/TextInput';
export default function Cadastro() {
  const [date, setDate] = useState();
  return (
    <KeyboardAvoidingView style={styles.container}>
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
        <DatePicker
          style={{width: 305, marginBottom: 10, marginTop: 3}}
          mode="date"
          date={date}
          placeholder="Selecione"
          format="DD-MM-YYYY"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {},
            dateInput: {
              borderRadius: 20,
              height: 45,
              borderWidth: 0,
              backgroundColor: '#EDF6FF',
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => setDate(date)}
        />
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
    </KeyboardAvoidingView>
  );
}
