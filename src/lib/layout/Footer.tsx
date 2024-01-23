import { Box, Link, Text, Image } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" width="full" textAlign="center" mb={48} fontSize="2xl">
      <Text display="inline" fontWeight={900} letterSpacing="0.033rem" mr="1.5">
        ERC-7412
      </Text>
      &nbsp;powers&nbsp;
      <Link mx={1} isExternal href="https://v3.synthetix.io">
        <Image
          display="inline"
          src="/logos/synthetix.svg"
          alt="Synthetix"
          height="16px"
        />
      </Link>
      &nbsp;on
      <Link mx={2.5} isExternal href="https://base.org">
        <Image
          display="inline"
          src="/logos/base.svg"
          alt="Base"
          height="21px"
          transform="translateY(3px)"
        />
      </Link>
    </Box>
  );
};

export default Footer;
