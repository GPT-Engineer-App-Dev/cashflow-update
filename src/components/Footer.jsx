import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <Box bg="gray.800" color="white" p={4} mt={10}>
    <Flex justify="space-between" align="center">
      <Text>&copy; 2023 Financial Times</Text>
      <Flex>
        <Link href="/about" p={2}>About</Link>
        <Link href="/contact" p={2}>Contact</Link>
        <Link href="/privacy" p={2}>Privacy Policy</Link>
      </Flex>
      <Flex>
        <Link href="https://facebook.com" isExternal p={2}><FaFacebook /></Link>
        <Link href="https://twitter.com" isExternal p={2}><FaTwitter /></Link>
        <Link href="https://linkedin.com" isExternal p={2}><FaLinkedin /></Link>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;