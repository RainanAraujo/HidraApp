import React, {useState} from 'react';

import TextInput from '../TextInput/index';
import {View} from 'react-native';
import Button from '../Button';
import styles from './styles';

export default function LoginForm({style, onSubmit}) {
  const [Form, setForm] = useState({email: '', pass: ''});

  return (
    <>
      <View style={{...styles.content, ...style}}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={Form.email}
          onChangeText={(str) => setForm({...Form, email: str})}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          value={Form.pass}
          onChangeText={(str) => setForm({...Form, pass: str})}
        />

        <Button
          text="Login"
          style={styles.buttonLogin}
          onPress={() => onSubmit(Form.email, Form.pass)}
        />
      </View>
    </>
  );
}
