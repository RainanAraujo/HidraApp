import React, {useState, useEffect, useRef} from 'react';
import {Picker} from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';
import {Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import Input from '../../components/TextInput';
export default function Cadastro() {
  const [date, setDate] = useState();
  const [course, setCourse] = useState('CC');

  const classCount = {
    CC: new Date().getFullYear() - 2013,
    BIO: new Date().getFullYear() - 2012,
  };

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
          minDate="01-01-1990"
          maxDate="12-12-2005"
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
          <Picker
            selectedValue={course}
            onValueChange={(value) => setCourse(value)}
            mode="dropdown"
            style={{height: 50, width: 180}}>
            <Picker.Item label="Ciência da Computação" value="CC" />
            <Picker.Item label="Ciências Biologicas" value="BIO" />
          </Picker>
          <Picker mode="dropdown" style={{height: 50, width: 130}}>
            {[...Array(classCount[course]).keys()].map((index) => {
              index = index + 1;
              if (index < 10) index = '0' + index;
              console.log(course + index);
              return (
                classCount[course] - 7 < index && (
                  <Picker.Item label={course + index} value={course + index} />
                )
              );
            })}
          </Picker>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
