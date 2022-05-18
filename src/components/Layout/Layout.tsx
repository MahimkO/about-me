import { FC, ReactNode } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import './Layout.scss';

type Props = {
  children: ReactNode;
};

export const Layout : FC<Props> = ({ children }) => {
  return (
    <div className='Layout__container'>
      <Header />
      <div className='Layout__children_container'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
