import { Center, Stack } from 'smarthr-ui';
import styled from 'styled-components';

import { Header } from './components/Header';

type LayoutProps = {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <Center>
        <LayoutContainer gap={2}>
          {children}
        </LayoutContainer>
      </Center>
    </>
  );
};

const LayoutContainer = styled(Stack)`
  padding: 16px 32px;
  width: 85%;
`;
