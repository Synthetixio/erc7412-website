'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth="container.lg" transition="0.5s ease-out">
      <Box as="main" marginY={22} mx="4">
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
