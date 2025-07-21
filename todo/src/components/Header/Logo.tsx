import { Cluster } from 'smarthr-ui';
import styled from 'styled-components';

import logo from '@/assets/todo_logo.png';

export const Logo = () => (
  <LogoContainer align="center">
    <img src={logo} alt="Todo" height={48} />
  </LogoContainer>
);

const LogoContainer = styled(Cluster)`
  padding: 0px 16px;
`;
