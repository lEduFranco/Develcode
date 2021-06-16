import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  padding: ${normalize(30)}px ${normalize(15)}px ${normalize(10)}px
    ${normalize(15)}px;
  background: #1a77bc;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.View``;

export const HeaderLogoText = styled.Text`
  font-size: ${normalize(22)}px;
  font-family: sans-serif;
  color: #fff;
`;

export const HeaderLogOut = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderLogOutText = styled.Text`
  color: #fff;
  font-size: ${normalize(22)}px;
  font-family: sans-serif;
  line-height: ${normalize(28)}px;
`;
