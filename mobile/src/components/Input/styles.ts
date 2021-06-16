import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: ${normalize(300)}px;
  height: ${normalize(55)}px;
  padding: ${normalize(0)}px ${normalize(16)}px;
  background: #fff;
  border-radius: ${normalize(15)}px;
  margin-bottom: ${normalize(8)}px;
  border-width: ${normalize(5)}px;
  border-color: #1a77bc;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: ${normalize(3.5)}px #1a2b31;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #1a2b31;
  font-size: ${normalize(17)}px;
  font-family: sans-serif;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${normalize(16)}px;
`;
