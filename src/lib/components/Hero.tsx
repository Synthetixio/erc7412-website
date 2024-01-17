import { Box, Heading, Link } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box mt={48}>
      <Heading fontSize="10em" fontWeight={900} letterSpacing="-0.33rem">
        ERC-7412
      </Heading>
      <Heading fontWeight={500} letterSpacing=".04rem">
        A{' '}
        <Link
          href="https://eips.ethereum.org/EIPS/eip-7412"
          isExternal
          borderBottom="1px solid"
          _hover={{ textDecoration: 'none' }}
        >
          standard
        </Link>{' '}
        for using oracle data on Ethereum
      </Heading>
      <Box my={48} fontSize="xl" fontWeight={300} opacity={0.5}>
        Diagram Placeholder
      </Box>
    </Box>
  );
};

export default Hero;
