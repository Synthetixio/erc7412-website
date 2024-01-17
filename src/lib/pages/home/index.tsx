import { Box } from '@chakra-ui/react';

import ClientLibrary from '~/lib/components/ClientLibrary';
import Hero from '~/lib/components/Hero';
import SmartContracts from '~/lib/components/SmartContracts';

const Home = () => {
  return (
    <Box>
      <Hero />
      <ClientLibrary />
      <SmartContracts />
    </Box>
  );
};

export default Home;
