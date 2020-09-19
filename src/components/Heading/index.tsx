import React from 'react';
// import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Container, HeadingText } from './styles';

import colors from '../../styles/colors';

const Header: React.FC = ({children}) => {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  )
};

export default Header;