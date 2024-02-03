import { Box, Container } from '@chakra-ui/react';

import ClientLibrary from '~/lib/components/ClientLibrary';
import Hero from '~/lib/components/Hero';
import SmartContracts from '~/lib/components/SmartContracts';

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container maxWidth="container.lg" px={[0, 0, 20]}>
        <SmartContracts />
        <ClientLibrary />
      </Container>
    </Box>
  );
};

export default Home;
