import React, { useRef, useCallback, useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  BackButton,
} from './styles';
import { UserName } from '../Dashboard/UserItem/styles';
import { compareDesc } from 'date-fns';

interface RegisterFormData {
  code: number;
  name: string;
  birth_date: string;
  avatar: string;
}


const Profile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);
  const birthDateInputRef = useRef<TextInput>(null);
  const avatarInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleUpdate = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        setLoading(true);

        const schema = Yup.object().shape({
          code: Yup.number(),
          name: Yup.string(),
          birth_date: Yup.string(),
          avatar: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put('/users', data);

        Alert.alert('Perfil atualizado com sucesso!');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          // eslint-disable-next-line no-unused-expressions
          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar o perfil, tente novamente',
        );
      }
    },
    [navigation],
  );


      
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
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
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#fff" />
            </BackButton>
            <View>
              <Title>Perfil</Title>
            </View>

            <Form 
            // initialData={{code: UserName}} 
            ref={formRef} onSubmit={handleUpdate}>
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
               onPress={() => formRef.current?.submitForm()}>
                Confirmar mudanças
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
