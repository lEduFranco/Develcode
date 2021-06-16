import styled from 'styled-components/native';
import { Platform } from 'react-native';
import normalize from 'react-native-normalize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${normalize(0)}px ${normalize(40)}px
    ${Platform.OS === 'android' ? 40 : 40}px;
`;

export const Title = styled.Text`
  font-size: ${normalize(24)}px;
  color: #1a2b31;
  font-family: 'Montserrat-Medium';
  margin: ${normalize(45)}px ${normalize(0)}px ${normalize(20)}px;
`;

export const DashboardNavigate = styled.TouchableOpacity`
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

export const DashboardNavigateText = styled.Text`
  color: #1a77bc;
  font-size: ${normalize(20)}px;
  font-family: 'RobotoSlab-Regular';
  margin-left: ${normalize(16)}px;
`;





