import { type FC, type ReactNode } from 'react';

import Header from './Header';

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);

export default Layout;
