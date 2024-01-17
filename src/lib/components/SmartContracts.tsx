import { Box, Stack, Heading } from '@chakra-ui/react';

const SmartContracts = () => {
  return (
    <Box mb={24}>
      <Heading fontWeight={500} mb={6}>
        Build protocols that use off-chain data from oracles
      </Heading>
      <Stack direction="row" spacing={4}>
        <Box
          p={4}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          minWidth="200px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
        >
          Chainlink
        </Box>
        <Box
          p={4}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          minWidth="200px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
        >
          Pyth
        </Box>
        <Box
          p={4}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          minWidth="200px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
        >
          Redstone
        </Box>
      </Stack>
    </Box>
  );
};

export default SmartContracts;
