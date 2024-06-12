import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <MainContent />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;