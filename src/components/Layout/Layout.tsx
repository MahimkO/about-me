import { FC, ReactNode } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import './Layout.scss';

type Props = {
  children: ReactNode;
};

export const Layout : FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  );
}
