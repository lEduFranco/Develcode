import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

import { User } from './index';

import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${normalize(55) + getBottomSpace()}px;
`;

export const UsersList = styled(FlatList as new () => FlatList<User>)`

`;

export const UserContainer = styled.View``;

export const UserInfo = styled.View``;

export const UserAvatar = styled.Image``;

export const UserMeta = styled.View``;

export const UserMetaText = styled.Text``;

export const UserName = styled.Text`
  
`;

export const RegisterNavigate = styled.TouchableOpacity`
  position: absolute;
  left: ${normalize(0)}px;
  bottom: ${normalize(0)}px;
  right: ${normalize(0)}px;
  background: #f7f5fa;
  border-top-width: 1px;
  border-color: #1a77bc;
  padding: ${normalize(16)}px ${normalize(0)}px
    ${normalize(20) + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const RegisterNavigateText = styled.Text`
  color: #1a77bc;
  font-size: ${normalize(20)}px;
  font-family: 'RobotoSlab-Regular';
  margin-left: ${normalize(16)}px;
`;
