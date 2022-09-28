import React from 'react';
import Header from '../Header';
import * as Styled from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Header />
      {children}
    </Styled.Wrapper>
  );
};

export default Layout;
