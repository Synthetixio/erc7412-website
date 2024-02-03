'use client';

import type { TabProps } from '@chakra-ui/react';
import {
  Box,
  Stack,
  Heading,
  Image,
  Link,
  Button,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from '@chakra-ui/react';
import { merge } from 'lodash';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import { FaGithub, FaLink } from 'react-icons/fa';

merge(atomOneDark, {
  backgroundColor: 'none',
  metaColor: 'red',
});

const example1 = `function ethPrice() public view returns (uint256) {
  IPythERC7412Wrapper pyth = IPythERC7412Wrapper("0xEb38e347F24ea04ffA945a475BdD949E0c383A0F");
  bytes32 priceId = "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace";
  uint stalenessTolerance = 60; // in seconds
  return pyth.getLatestPrice(priceId, stalenessTolerance); // also see getBenchmarkPrice
}`;
const example2 = `function linkPrice() public view returns (uint256) {
  DataStreamsERC7412Compatible chainlink = DataStreamsERC7412Compatible("");
  return chainlink.
}`;
const example3 = `function btcPrice() public view returns (uint256) {
  ERC7412RedstoneFeed redstoneBTC = ERC7412RedstoneFeed("");
  return redstoneBTC.getLatestValue();
}`;

function MyCodeBlock({ code }: { code: string }) {
  return (
    <CodeBlock
      text={code}
      language="solidity"
      showLineNumbers={false}
      theme={atomOneDark}
    />
  );
}

interface CustomTabProps extends TabProps {
  children: React.ReactNode;
}

// CustomTab component definition with TypeScript
const CustomTab: React.FC<CustomTabProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
  ...rest
}) => {
  return (
    <Tag
      as={Tab}
      size="sm"
      variant="outline"
      mr={6}
      p={2}
      minWidth="96px"
      minHeight="0px"
      opacity={0.8}
      _hover={{ opacity: 1 }}
      _selected={{ color: 'white', outline: '1px solid #c678dd', opacity: 1 }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const SmartContracts = () => {
  return (
    <Box mb={[36, 36, 44]}>
      <Heading fontWeight={500} mb={3}>
        Build protocols that use data from oracles
      </Heading>
      <Text mb={8}>
        Write and deploy smart contracts that call oracle contracts to reference
        off-chain data.
      </Text>

      <Tabs variant="unstyled">
        <TabList mb={8}>
          <CustomTab>
            <Image
              src="/logos/pyth.svg"
              alt="Pyth"
              m="auto"
              opacity="0.8"
              maxHeight="36px"
              px={3}
            />
          </CustomTab>
          <CustomTab>
            <Image
              src="/logos/chainlink.svg"
              alt="Chainlink"
              m="auto"
              opacity="0.8"
              maxHeight="40px"
              px={3}
            />
          </CustomTab>
          <CustomTab>
            <Image
              src="/logos/redstone.svg"
              alt="Redstone"
              m="auto"
              opacity="0.8"
              maxHeight="48px"
              px={1}
            />
          </CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <Text fontSize="sm" color="gray.300" mb={1}>
              Example Code
            </Text>
            <Box
              mb={6}
              maxWidth="767px"
              style={{ fontFamily: 'monospace' }}
              padding={2}
              background="#ffffff0f"
              borderRadius="md"
              boxShadow="0 3px 10px #17071c"
            >
              <MyCodeBlock code={example1} />
            </Box>

            <Stack direction="row" spacing={4} mb={[16, 16, 20]}>
              <Button
                as={Link}
                href="https://pyth.network"
                leftIcon={<FaLink />}
                size="sm"
                _hover={{ textDecoration: 'none', background: 'gray.800' }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 3px 10px #17071c"
                isExternal
              >
                Website
              </Button>
              <Button
                as={Link}
                href="https://github.com/Synthetixio/synthetix-v3/tree/main/auxiliary/PythERC7412Wrapper"
                leftIcon={<FaGithub />}
                size="sm"
                _hover={{ textDecoration: 'none', background: 'gray.800' }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 3px 10px #17071c"
                isExternal
              >
                Code
              </Button>
              <Button
                as={Link}
                href="https://usecannon.com/packages/pyth-erc7412-wrapper"
                leftIcon={
                  <Image
                    src="/logos/cannon.svg"
                    alt="Cannon"
                    maxHeight="14px"
                  />
                }
                size="sm"
                _hover={{ textDecoration: 'none', background: 'gray.800' }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 3px 10px #17071c"
                isExternal
              >
                Deployments
              </Button>
            </Stack>
          </TabPanel>
          <TabPanel p={0}>
            <Text fontSize="sm" color="gray.300" mb={1}>
              Example Code
            </Text>
            <Box
              mb={6}
              maxWidth="767px"
              style={{ fontFamily: 'monospace' }}
              padding={2}
              background="#ffffff0f"
              borderRadius="md"
              boxShadow="0 3px 10px #17071c"
            >
              <MyCodeBlock code={example2} />
            </Box>

            <Stack direction="row" spacing={4} mb={[16, 16, 20]}>
              <Button
                as={Link}
                href="https://docs.chain.link/data-streams"
                leftIcon={<FaLink />}
                size="sm"
                _hover={{ textDecoration: 'none', background: 'gray.800' }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 3px 10px #17071c"
                isExternal
              >
                Website
              </Button>
              <Button
                as={Link}
                href="https://github.com/smartcontractkit/datastreams-erc7412"
                leftIcon={<FaGithub />}
                size="sm"
                _hover={{ textDecoration: 'none', background: 'gray.800' }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 3px 10px #17071c"
                isExternal
              >
                Code
              </Button>
            </Stack>
          </TabPanel>
          <TabPanel p={0}>
            <Text fontSize="sm" color="gray.300" mb={1}>
              Example Code
            </Text>
            <Box
              mb={6}
              maxWidth="767px"
              style={{ fontFamily: 'monospace' }}
              padding={2}
              background="#ffffff0f"
              borderRadius="md"
              boxShadow="0 3px 10px #17071c"
            >
              <MyCodeBlock code={example3} />
            </Box>

            <Stack direction="row" spacing={4} mb={[16, 16, 20]}>
              <Button
                as={Link}
                href="https://redstone.finance/"
                leftIcon={<FaLink />}
                size="sm"
                _hover={{ textDecoration: 'none', background: 'gray.800' }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 3px 10px #17071c"
                isExternal
              >
                Website
              </Button>
              <Button
                as={Link}
                href="https://github.com/redstone-finance/erc7412"
                leftIcon={<FaGithub />}
                size="sm"
                _hover={{ textDecoration: 'none', background: 'gray.800' }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 3px 10px #17071c"
                isExternal
              >
                Code
              </Button>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SmartContracts;
