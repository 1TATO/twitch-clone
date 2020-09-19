import React from 'react';
// import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

import colors from '../../styles/colors';

const Header: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default Header;