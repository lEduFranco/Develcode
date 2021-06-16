import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';

export const Container = styled(RectButton)`
  height: ${normalize(55)}px;
  background: #1a77bc;
  border-radius: ${normalize(15)}px;
  margin-top: ${normalize(10)}px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #f5f5f5;
  font-size: ${normalize(18)}px;
`;
