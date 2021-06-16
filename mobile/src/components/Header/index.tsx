import React from 'react';

import {
  Container,
  HeaderLogo,
  HeaderLogoText,
} from './styles';

const Header: React.FC = () => {;
  return (
    <Container>
      <HeaderLogo>
        <HeaderLogoText>Develcode</HeaderLogoText>
      </HeaderLogo>
    </Container>
  );
};

export default Header;
