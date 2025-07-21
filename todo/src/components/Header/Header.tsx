import { Header as SmarthHeader } from 'smarthr-ui';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <SmarthHeader logo={<Logo />} />
  );
};
