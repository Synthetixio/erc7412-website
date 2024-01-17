import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" mb={24}>
      <Text fontSize="2xl">ERC-7412 powers Synthetix on Base</Text>
    </Flex>
  );
};

export default Footer;
