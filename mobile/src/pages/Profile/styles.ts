import styled from 'styled-components/native';
import { Platform } from 'react-native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${normalize(0)}px ${normalize(40)}px
    ${Platform.OS === 'android' ? 40 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 70px;
`;

export const Title = styled.Text`
  font-size: ${normalize(24)}px;
  color: #1a2b31;
  font-family: 'Montserrat-Medium';
  margin: ${normalize(45)}px ${normalize(0)}px ${normalize(20)}px;
`;