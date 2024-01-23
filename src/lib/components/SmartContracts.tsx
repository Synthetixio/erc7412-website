import {
  Box,
  Stack,
  Heading,
  Image,
  Link,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const SmartContracts = () => {
  return (
    <Box mb={[24, 24, 44]}>
      <Heading fontWeight={500} mb={3}>
        Build protocols that use data from oracles
      </Heading>
      <Text mb={6}>
        Write and deploy smart contracts that call oracle contracts to reference
        off-chain data.
      </Text>
      <Stack direction={['column', 'row']} spacing={8}>
        <Box minWidth="200px">
          <Flex
            href="https://pyth.network"
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
            mb={3}
            boxShadow="0 3px 10px #17071c"
          >
            <Image
              src="/logos/pyth.svg"
              alt="Pyth"
              m="auto"
              opacity="0.8"
              maxHeight="46px"
            />
          </Flex>

          <Flex>
            <Button
              as={Link}
              href="https://github.com/Synthetixio/synthetix-v3/tree/main/auxiliary/PythERC7412Wrapper"
              leftIcon={<FaGithub />}
              size="xs"
              _hover={{ textDecoration: 'none' }}
              border="1px solid"
              borderColor="whiteAlpha.300"
              boxShadow="0 3px 10px #17071c"
            >
              Code
            </Button>

            <Button
              as={Link}
              href="https://usecannon.com/packages/pyth-erc7412-wrapper"
              leftIcon={
                <Image src="/logos/cannon.svg" alt="Cannon" maxHeight="12px" />
              }
              size="xs"
              _hover={{ textDecoration: 'none' }}
              border="1px solid"
              borderColor="whiteAlpha.300"
              ml={[3, 3, 'auto']}
              boxShadow="0 3px 10px #17071c"
            >
              Deployments
            </Button>
          </Flex>
        </Box>
        <Box minWidth="200px">
          <Flex
            href="https://docs.chain.link/data-streams"
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
            mb={3}
            boxShadow="0 3px 10px #17071c"
          >
            <Image
              src="/logos/chainlink.svg"
              alt="Chainlink"
              m="auto"
              opacity="0.8"
              transform="scale(1.2)"
            />
          </Flex>
          <Button
            as={Link}
            href="https://github.com/smartcontractkit/datastreams-erc7412"
            leftIcon={<FaGithub />}
            size="xs"
            _hover={{ textDecoration: 'none' }}
            border="1px solid"
            borderColor="whiteAlpha.300"
            boxShadow="0 3px 10px #17071c"
          >
            Code
          </Button>
        </Box>
        <Box minWidth="200px">
          <Flex
            href="https://redstone.finance/"
            isExternal
            as={Link}
            p={1}
            bg="whiteAlpha.100"
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.300"
            minWidth="200px"
            minHeight="82px"
            textAlign="center"
            fontWeight={600}
            fontSize="xl"
            mb={3}
            boxShadow="0 3px 10px #17071c"
          >
            <Image
              src="/logos/redstone.svg"
              alt="Redstone"
              m="auto"
              opacity="0.8"
              maxHeight="56px"
            />
          </Flex>

          <Button
            as={Link}
            href="https://github.com/redstone-finance/erc7412"
            leftIcon={<FaGithub />}
            size="xs"
            _hover={{ textDecoration: 'none' }}
            border="1px solid"
            borderColor="whiteAlpha.300"
            boxShadow="0 3px 10px #17071c"
          >
            Code
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SmartContracts;
