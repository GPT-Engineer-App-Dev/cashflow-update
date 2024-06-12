import { Box, Flex, Heading, Link } from '@chakra-ui/react';

const Header = () => (
  <Box bg="gray.800" color="white" p={4}>
    <Flex justify="space-between" align="center">
      <Heading size="md">Financial Times</Heading>
      <Flex>
        <Link href="/" p={2}>Home</Link>
        <Link href="/world" p={2}>World</Link>
        <Link href="/business" p={2}>Business</Link>
        <Link href="/tech" p={2}>Tech</Link>
        <Link href="/science" p={2}>Science</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Header;