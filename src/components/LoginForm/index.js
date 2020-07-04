import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import styles from './styles';
import TextInput from '../TextInput/index';

export default function LoginForm({email, pass}) {
  return (
    <>
      <View style={styles.content}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={(str) => setForm({...Form, email: str})}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          value={pass}
          onChangeText={(str) => setForm({...Form, pass: str})}
        />

        <Button
          text={'Login'}
          backgroundColor={styles.buttonLogin.backgroundColor}
        />
      </View>
    </>
  );
}
