import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import IconFeather from 'react-native-vector-icons/Feather';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header'

import { Container, Title, DashboardNavigate, DashboardNavigateText} from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface RegisterFormData {
  code: number;
  name: string;
  birth_date: string;
  avatar: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);
  const birthDateInputRef = useRef<TextInput>(null);
  const avatarInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleRegister = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        setLoading(true);

        const schema = Yup.object().shape({
          code: Yup.number().required('Campo código obrigatório e no mínimo 6 digitos'),
          name: Yup.string().required('Campo nome obrigatório'),
          birth_date: Yup.string().required('Campo data de nascimento obrigatório'),
          avatar: Yup.string().required('Campo foto obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        navigation.navigate('Dashboard')
      } catch (err) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          Alert.alert(
            'Erro no registro',
            'Ocorreu um erro ao fazer registro, cheque as credênciais.',
          );

          return;
        }

        Alert.alert(
          'Erro no registro',
          'Ocorreu um erro ao fazer registro, cheque as credênciais.',
        );
      }
    },
    [],
  );

  return (
    <>
     <Header />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
           
            <View>
              <Title>Faça um registro</Title>
            </View>

            <Form ref={formRef} onSubmit={handleRegister}>
              <Input
                name="code"
                keyboardType="numeric"
                icon="code"
                placeholder="Digite um código"
                returnKeyType="next"
                onSubmitEditing={() => {
                  nameInputRef.current?.focus();
                }}
              />

              <Input
                ref={nameInputRef}
                name="name"
                icon="user"
                placeholder="Digite um nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  birthDateInputRef.current?.focus();
                }}
              />

              <Input
                ref={birthDateInputRef}
                name="birth_date"
                icon="calendar"
                placeholder="Data de nascimento"
                returnKeyType="next"
                onSubmitEditing={() => {
                  avatarInputRef.current?.focus();
                }}
              />
              
               <Input
                ref={avatarInputRef}
                name="avatar"
                icon="camera"
                placeholder="URL da foto"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                loading={loading}
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Registrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <DashboardNavigate onPress={() => navigation.navigate('Dashboard')}>
        <IconFeather name="user" size={20} color="#1a77bc" />
        <DashboardNavigateText>Lista de registros</DashboardNavigateText>
      </DashboardNavigate>
    </>
  );
};

export default Register;
