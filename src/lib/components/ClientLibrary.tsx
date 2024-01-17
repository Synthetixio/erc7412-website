'use client';

import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';
import Editor from '@monaco-editor/react';
import { FaGithub } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';

const example = `import { createBundlerClient } from "permissionless"
import { base } from "viem/chains"
import { http } from "viem"
import { enableERC7412 } from "erc7412"

// ~10 line code example
`;

const ClientLibrary = () => {
  return (
    <Box mb={20}>
      <Heading fontWeight={500} mb={6}>
        Build apps with protocols that connect to oracles
      </Heading>
      <Heading size="md" mb={2}>
        Client Library
      </Heading>
      <Text mb={4}>
        The client library automatically adds oracle data to transactions when
        necessary.
      </Text>
      <Box mb={8}>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaGithub />} size="sm">
            View on GitHub
          </Button>
          <Button leftIcon={<SiNpm />} size="sm">
            View on npm
          </Button>
        </Stack>
      </Box>
      <Box mb={10}>
        <Editor
          height="200px"
          defaultLanguage="javascript"
          defaultValue={example}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
          }}
        />
      </Box>
      <Heading size="md" mb={4}>
        Supported Account Abstraction Solutions
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
          Safe
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
          Biconomy
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
          ZeroDev
        </Box>
      </Stack>
    </Box>
  );
};

export default ClientLibrary;
