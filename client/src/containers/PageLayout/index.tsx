import React from 'react';
import * as Styled from './styled';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default PageLayout;
