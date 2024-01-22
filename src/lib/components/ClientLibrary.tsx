'use client';

import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  Image,
  Flex,
} from '@chakra-ui/react';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import { FaGithub } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';

const example = `import { withRequiredOracleData, PythAdapter } from "erc7412";

// Convert transactions into an array of transactions, prepending \`fulfillOracleQuery()\` calls.
// This automatically resolves \`OracleDataRequired\` and \`FeeRequired\` errors.
const transactionsWithOracleData = withRequiredOracleData(
  transactions,
  [new PythAdapter('https://hermes.pyth.network')]
);

return await client.sendTransactions({ transactions: transactionsWithOracleData });`;

function MyCodeBlock() {
  return (
    <CodeBlock
      text={example}
      language="javascript"
      showLineNumbers={false}
      theme={atomOneDark}
    />
  );
}

const ClientLibrary = () => {
  return (
    <Box mb={16}>
      <Heading fontWeight={500} mb={4}>
        Build apps with protocols that connect to oracles
      </Heading>
      <Text mb={4}>
        The client library automatically adds oracle data to transactions when
        necessary.
      </Text>
      <Box mb={8}>
        <Stack direction="row" spacing={4}>
          <Button
            as={Link}
            href="https://github.com/synthetixio/erc7412"
            leftIcon={<FaGithub />}
            size="sm"
            _hover={{ textDecoration: 'none' }}
          >
            View on GitHub
          </Button>
          <Button
            as={Link}
            href="https://www.npmjs.com/package/erc7412"
            leftIcon={<SiNpm />}
            size="sm"
            _hover={{ textDecoration: 'none' }}
          >
            View on npm
          </Button>
        </Stack>
      </Box>
      <Box mb={2} maxWidth="767px" style={{ fontFamily: 'monospace' }}>
        <MyCodeBlock />
      </Box>
      <Text fontSize="sm" color="gray.300" mb={16}>
        See the{' '}
        <Link
          href="https://github.com/synthetixio/erc7412"
          isExternal
          borderBottom="1px solid"
          _hover={{ textDecoration: 'none' }}
        >
          full example
        </Link>{' '}
        using{' '}
        <Link
          href="https://docs.pimlico.io/permissionless"
          isExternal
          borderBottom="1px solid"
          _hover={{ textDecoration: 'none' }}
        >
          permissionless.js
        </Link>
        .
      </Text>
      <Heading size="md" mb={5}>
        Compatible Account Abstraction Solutions
      </Heading>

      <Stack direction={['column', 'row']} spacing={8} mb={2}>
        <Flex
          href="https://safe.global"
          isExternal
          as={Link}
          p={4}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          minWidth="200px"
          minHeight="82px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
        >
          <Image src="/logos/safe.svg" alt="Safe" m="auto" opacity="0.8" />
        </Flex>
        <Flex
          href="https://biconomy.io/"
          isExternal
          as={Link}
          p={4}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          minWidth="200px"
          minHeight="82px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
        >
          <Image
            src="/logos/biconomy.svg"
            alt="Biconomy"
            m="auto"
            opacity="0.8"
            transform="scale(1.25) translate(0, 2px)"
          />
        </Flex>
        <Flex
          href="https://zerodev.app/"
          isExternal
          as={Link}
          p={4}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          minWidth="200px"
          minHeight="82px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
        >
          <Image
            src="/logos/zerodev.svg"
            alt="ZeroDev"
            m="auto"
            opacity="0.8"
          />
        </Flex>
      </Stack>

      <Text fontSize="sm" color="gray.300">
        Protocols that integrate with the{' '}
        <Link
          isExternal
          borderBottom="1px solid"
          _hover={{ textDecoration: 'none' }}
          href="https://github.com/Synthetixio/synthetix-v3/tree/main/auxiliary/TrustedMulticallForwarder"
        >
          trusted multicall forwarder
        </Link>{' '}
        are also compatible with EOAs.
      </Text>
    </Box>
  );
};

export default ClientLibrary;
