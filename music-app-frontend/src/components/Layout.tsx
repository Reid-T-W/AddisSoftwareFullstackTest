import React, {ReactNode} from 'react';
import styled from '@emotion/styled';
import { color, space } from 'styled-system';
import { LuSeparatorHorizontal } from "react-icons/lu";
import HorizontalMenu from './ui/HorizontalMenu';
import Stats from './ui/Stats';

const Container = styled.div`
  ${color}
  ${space}
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  background-color: #242424;
  color:white;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: red;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #242424;
`;

const MainContainer = styled.main`
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  background-color: #242424;
`

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #242424;
`;

export interface LayoutProps {
    children: ReactNode;
  }

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container background-color="primary">
      <Header>
        <h1>Music App</h1>
        <LuSeparatorHorizontal />
      </Header>
      <Stats />  
      <HorizontalMenu />
      <InnerContainer>
        <MainContainer >
          {children}
        </MainContainer>
      </InnerContainer>
      <Footer>
        <p>© 2024 Music App. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default Layout;