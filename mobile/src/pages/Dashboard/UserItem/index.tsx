import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import IconFeather from 'react-native-vector-icons/Feather';

import api from '../../../services/api';

import {
  UsersList,
  UserName,
  UserContainer,
  UserInfo,
  UserAvatar,
  UserMeta,
  UserMetaText,
} from './styles';

export interface User {
  id: string;
  code: number;
  name: string;
  birth_date: string;
  avatar: string;
}


const UserItem: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const navigateToProfile = useCallback((userId: string) => {
    navigate('Profile', { userId })
  }, [navigate])

  return (
    <UsersList 
    data={users} 
    keyExtractor={user => user.id}
    renderItem={({item: user}) => (
      <UserContainer onPress={() => navigateToProfile(user.id)}>
        <UserAvatar source={{uri: user.avatar}} />

        <UserInfo>
          <UserName>{user.name}</UserName>

          <UserMeta>
            <IconFeather name="calendar" size={14} color="#1a77bc" />
            <UserMetaText>{user.birth_date}</UserMetaText>
          </UserMeta>

          <UserMeta>
            <IconFeather name="code" size={14} color="#1a77bc" />
            <UserMetaText>{user.code}</UserMetaText>
          </UserMeta>
        </UserInfo>
      </UserContainer>
    )}
   />
  );
}

export default UserItem;