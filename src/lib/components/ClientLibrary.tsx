'use client';

import type { TabProps } from '@chakra-ui/react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  Image,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from '@chakra-ui/react';
import { merge } from 'lodash';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import { FaGithub } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';

merge(atomOneDark, {
  backgroundColor: 'none',
  metaColor: 'red',
});

const example1 = `// Under Development

import { withRequiredOracleData, PythAdapter } from "erc7412";

// Call View Functions
// This automatically resolves \`OracleDataRequired\` and \`FeeRequired\` errors.
// TODO

// Prepare Transactions for Signing
// This returns an array that includes \`fulfillOracleQuery()\` calls when necessary.
const transactionsWithOracleData = await withRequiredOracleData(
  transactions,
  [new PythAdapter('https://hermes.pyth.network')]
);
return await client.sendTransactions({ transactions: transactionsWithOracleData });`;

const example2 = `// Under Development

import { withRequiredOracleData, PythAdapter } from "erc7412";

// Call View Functions
// This automatically resolves \`OracleDataRequired\` and \`FeeRequired\` errors.
// TODO

// Prepare Transactions for Signing
// This returns a call to the trusted multicall forwarder.
// TODO`;

const example3 = `// Under Development

import { withRequiredOracleData, PythAdapter } from "erc7412";

// Call View Functions
// This automatically resolves \`OracleDataRequired\` and \`FeeRequired\` errors.
// TODO

// Prepare Transactions for Signing
// This returns a call to the trusted multicall forwarder.
// TODO`;

function MyCodeBlock({ code }: { code: string }) {
  return (
    <CodeBlock
      text={code}
      language="javascript"
      showLineNumbers={false}
      theme={atomOneDark}
    />
  );
}

interface CustomTabProps extends TabProps {
  children: React.ReactNode;
  tagText: string;
}

// CustomTab component definition with TypeScript
const CustomTab: React.FC<CustomTabProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  tagText,
  ...rest
}) => {
  return (
    <Tag
      as={Tab}
      height="2em"
      size="sm"
      variant="outline"
      _hover={{ color: 'white' }}
      _selected={{ color: 'white', outline: '1px solid #c678dd' }}
      {...rest}
    >
      <Flex align="baseline">
        {children}&nbsp;
        <Text fontWeight="300" fontSize="2xs">
          {tagText}
        </Text>
      </Flex>
    </Tag>
  );
};

const ClientLibrary = () => {
  return (
    <Box mb={[16, 16, 48]}>
      <Heading fontWeight={500} mb={3}>
        Build apps with protocols that connect to oracles
      </Heading>
      <Text mb={6}>
        The client library automatically adds oracle data to transactions when
        necessary.
      </Text>
      <Box mb={[8, 8, 16]}>
        <Stack direction="row" spacing={3}>
          <Button
            as={Link}
            href="https://github.com/synthetixio/erc7412"
            leftIcon={<FaGithub />}
            size="sm"
            _hover={{ textDecoration: 'none', background: 'gray.800' }}
            border="1px solid"
            borderColor="whiteAlpha.300"
            boxShadow="0 3px 10px #17071c"
          >
            View on GitHub
          </Button>
          <Button
            as={Link}
            href="https://www.npmjs.com/package/erc7412"
            leftIcon={<SiNpm />}
            size="sm"
            _hover={{ textDecoration: 'none', background: 'gray.800' }}
            border="1px solid"
            borderColor="whiteAlpha.300"
            boxShadow="0 3px 10px #17071c"
          >
            View on npm
          </Button>
        </Stack>
      </Box>

      <Tabs variant="unstyled">
        <TabList mb={6}>
          <Flex direction={{ base: 'column', md: 'row' }} gap="4">
            <CustomTab tagText="permissionless.js">
              Account Abstraction
            </CustomTab>
            <CustomTab tagText="v2">viem</CustomTab>
            <CustomTab tagText="v6">ethers.js</CustomTab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <Box
              mb={3}
              maxWidth="767px"
              style={{ fontFamily: 'monospace' }}
              padding={2}
              background="#ffffff0f"
              borderRadius="md"
              boxShadow="0 3px 10px #17071c"
            >
              <MyCodeBlock code={example1} />
            </Box>
            <Text fontSize="sm" color="gray.300" mb={[16, 16, 20]}>
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
          </TabPanel>
          <TabPanel p={0}>
            <Box
              mb={3}
              maxWidth="767px"
              style={{ fontFamily: 'monospace' }}
              padding={2}
              background="#ffffff0f"
              borderRadius="md"
              boxShadow="0 3px 10px #17071c"
            >
              <MyCodeBlock code={example2} />
            </Box>

            <Text fontSize="sm" color="gray.300" mb={[16, 16, 20]}>
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
                href="https://viem.sh/"
                isExternal
                borderBottom="1px solid"
                _hover={{ textDecoration: 'none' }}
              >
                viem v2
              </Link>
              .
            </Text>
          </TabPanel>
          <TabPanel p={0}>
            <Box
              mb={3}
              maxWidth="767px"
              style={{ fontFamily: 'monospace' }}
              padding={2}
              background="#ffffff0f"
              borderRadius="md"
              boxShadow="0 3px 10px #17071c"
            >
              <MyCodeBlock code={example3} />
            </Box>

            <Text fontSize="sm" color="gray.300" mb={[16, 16, 20]}>
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
                href="https://docs.ethers.org/v6/"
                isExternal
                borderBottom="1px solid"
                _hover={{ textDecoration: 'none' }}
              >
                ethers.js v6
              </Link>
              .
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Heading size="md" mb={6}>
        Compatible Account Abstraction Solutions
      </Heading>

      <Stack direction={['column', 'row']} spacing={6} mb={3}>
        <Flex
          href="https://safe.global"
          isExternal
          as={Link}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          p={2}
          minWidth="96px"
          minHeight="64px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
          boxShadow="0 3px 10px #17071c"
          // eslint-disable-next-line sonarjs/no-duplicate-string
          _hover={{ background: 'whiteAlpha.200' }}
        >
          <Image
            src="/logos/safe.svg"
            alt="Safe"
            m="auto"
            px={2}
            height="100%"
            opacity="0.8"
            maxHeight="48px"
          />
        </Flex>
        <Flex
          href="https://biconomy.io/"
          isExternal
          as={Link}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          p={2}
          minWidth="96px"
          minHeight="64px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
          boxShadow="0 3px 10px #17071c"
          _hover={{ background: 'whiteAlpha.200' }}
        >
          <Image
            src="/logos/biconomy.svg"
            alt="Biconomy"
            m="auto"
            maxHeight="32px"
            px={6}
            opacity="0.8"
            transform="scale(1.25) translate(0, 2px)"
          />
        </Flex>
        <Flex
          href="https://zerodev.app/"
          isExternal
          as={Link}
          bg="whiteAlpha.100"
          borderRadius="md"
          border="1px solid"
          borderColor="whiteAlpha.300"
          p={2}
          minWidth="96px"
          minHeight="64px"
          textAlign="center"
          fontWeight={600}
          fontSize="xl"
          boxShadow="0 3px 10px #17071c"
          _hover={{ background: 'whiteAlpha.200' }}
        >
          <Image
            src="/logos/zerodev.svg"
            alt="ZeroDev"
            m="auto"
            px={2}
            maxHeight="38px"
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
