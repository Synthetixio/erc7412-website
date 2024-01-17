'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth="container.xl" transition="0.5s ease-out">
      <Box mx="4">
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
