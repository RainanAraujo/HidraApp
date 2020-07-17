import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';
import {Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import Input from '../TextInput';
export default function Register({onChange}) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState();
  const [course, setCourse] = useState('CC');
  const [currentClass, setCurrentClass] = useState();

  const classCount = {
    CC: new Date().getFullYear() - 2013,
    BIO: new Date().getFullYear() - 2012,
  };

  useEffect(() => {
    if (
      name.length > 0 &&
      lastName.length > 0 &&
      date != null &&
      currentClass != null
    ) {
      onChange({
        name: name,
        lastName: lastName,
        dateBirth: date,
        class: currentClass,
      });
    } else {
      onChange(false);
    }
  }, [name, lastName, date, currentClass]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.textTitle}>Cadastro</Text>
        <Text style={styles.textSubTitle}>
          Adicione suas informações para nos conhecer melhor :)
        </Text>
      </View>
      <View>
        <Text style={styles.titleInput}>Nome *</Text>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          keyboardType="name-phone-pad"
          textContentType="name"
        />
        <Text style={styles.titleInput}>Sobrenome *</Text>
        <Input
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          keyboardType="name-phone-pad"
          textContentType="name"
        />
        <Text style={styles.titleInput}>Nascimento *</Text>
        <DatePicker
          style={{width: 305, marginBottom: 10, marginTop: 3}}
          mode="date"
          date={date}
          placeholder="Selecione"
          format="DD/MM/YYYY"
          minDate="01/01/1990"
          maxDate={'31/12/' + (new Date().getFullYear() - 15)}
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
          <Picker
            selectedValue={currentClass}
            onValueChange={(value) => setCurrentClass(value)}
            mode="dropdown"
            style={{height: 50, width: 130}}>
            {[...Array(classCount[course]).keys()].map((index) => {
              index = index + 1;
              if (index < 10) index = '0' + index;
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
