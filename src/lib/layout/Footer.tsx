import { Box, Link, Text, Image, Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container my={48} maxWidth="container.lg" px={[0, 0, 20]}>
      <Box fontSize="2xl" mb={2.5}>
        <Text
          display="inline"
          fontWeight={900}
          letterSpacing="0.033rem"
          mr="1.5"
        >
          ERC-7412
        </Text>
        &nbsp;powers&nbsp;&nbsp;
        <Link isExternal href="https://v3.synthetix.io">
          <Image
            display="inline"
            src="/logos/synthetix.svg"
            alt="Synthetix"
            height="16px"
          />
        </Link>
        &nbsp;&nbsp;on&nbsp;&nbsp;
        <Link isExternal href="https://base.org">
          <Image
            display="inline"
            src="/logos/base.svg"
            alt="Base"
            height="21px"
            transform="translateY(3px)"
          />
        </Link>
      </Box>
      <Text fontSize="sm" color="gray.300">
        Build something awesome that integrates with{' '}
        <Link
          borderBottom="1px solid"
          _hover={{ textDecoration: 'none' }}
          isExternal
          href="https://docs.synthetix.io/v/v3/for-perp-integrators/base-andromeda"
        >
          Synthetix Perps V3
        </Link>
        .
      </Text>
    </Container>
  );
};

export default Footer;
