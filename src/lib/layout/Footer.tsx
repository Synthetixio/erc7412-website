import { Box, Link, Text, Image, Container } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container maxWidth="container.lg" px={[0, 0, 20]}>
      <Box mb={48} fontSize="2xl">
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
    </Container>
  );
};

export default Footer;
