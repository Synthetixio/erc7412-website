import { Box, Heading, Link, Image } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box mt={[24, 36]} textAlign="center">
      <Heading
        fontSize={['4em', '10em']}
        fontWeight={900}
        letterSpacing={['0', '-0.33rem']}
        textShadow="0 3px 6px #5b1c6d"
      >
        ERC-7412
      </Heading>
      <Heading
        fontWeight={500}
        letterSpacing=".04rem"
        textShadow="0 3px 6px #5b1c6d"
      >
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

      <Box my={[16, 36]} width="100%">
        <Image src="/sequencediagram.svg" alt="ERC-7412 Sequence Diagram" />
      </Box>
    </Box>
  );
};

export default Hero;
