import React from 'react';

import Header from '../../components/Header';
import UserItem from './UserItem'
import IconFeather from 'react-native-vector-icons/Feather';

import {
  Container,
  RegisterNavigate,
  RegisterNavigateText,
  
} from './styles';
import { useNavigation } from '@react-navigation/native';


const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <UserItem />

      <RegisterNavigate onPress={() => navigation.navigate('Register')}>
        <IconFeather name="file-text" size={20} color="#1a77bc" />
        <RegisterNavigateText>Registrar</RegisterNavigateText>
      </RegisterNavigate>
    </Container>
  );
};

export default Dashboard;

