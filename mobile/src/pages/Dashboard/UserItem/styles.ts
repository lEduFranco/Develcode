import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { User } from './index';
import normalize from 'react-native-normalize';
import { RectButton } from 'react-native-gesture-handler';

export const UsersList = styled(FlatList as new () => FlatList<User>)`
  padding:  ${normalize(0)}px  ${normalize(24)}px  ${normalize(16)}px ;
`;


export const UserContainer = styled(RectButton)`
   background: #fff;
   border-radius: 10px;
   padding: 20px;
   margin-bottom: 16px;
   flex-direction: row;
   align-items: center;
`;

export const UserInfo = styled.View`
   flex: 1;
  margin-left: ${normalize(20)}px;
`;

export const UserAvatar = styled.Image`
   width: ${normalize(72)}px;
  height: ${normalize(72)}px;
  border-radius:${normalize(36)}px;
`;

export const UserMeta = styled.View`
   flex-direction: row;
  align-items: center;
  margin-top: ${normalize(8)}px;
`;

export const UserMetaText = styled.Text`
  margin-left: ${normalize(8)}px;
  color: #1a77bc;
  font-family: sans-serif;
`;

export const UserName = styled.Text`
   font-family: sans-serif;
  font-size: ${normalize(18)}px;
  color: #1a77bc;
`;