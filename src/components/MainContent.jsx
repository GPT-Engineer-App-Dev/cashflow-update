import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const MainContent = () => (
  <Box p={4}>
    <Heading mb={4}>Top Stories</Heading>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">Article 1</Heading>
        <Text mt={2}>Summary of the article...</Text>
      </Box>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">Article 2</Heading>
        <Text mt={2}>Summary of the article...</Text>
      </Box>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">Article 3</Heading>
        <Text mt={2}>Summary of the article...</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default MainContent;