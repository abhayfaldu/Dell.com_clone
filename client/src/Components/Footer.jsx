import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>IN/EN</ListHeader>
            <Link href={'#'}>Site Map</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Account</ListHeader>
            <Link href={'#'}>My Account</Link>
            <Link href={'#'}>Order Status</Link>
            <Link href={'#'}>My Products</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Home Support</Link>
            <Link href={'#'}>Contact Support</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Connect With Us</ListHeader>
            <Link href={'#'}>Community</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
        </SimpleGrid>
      </Container>

    </Box>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Our Offerings</ListHeader>
            <Link href={'#'}>APEX</Link>
            <Link href={'#'}>Products</Link>
            <Link href={'#'}>Solutions</Link>
            <Link href={'#'}>Services</Link>
            <Link href={'#'}>Deals</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Our Company</ListHeader>
            <Link href={'#'}>Who We Are</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Investors</Link>
            <Link href={'#'}>Newsroom</Link>
            <Link href={'#'}>Perspectives</Link>
            <Link href={'#'}>Recycling</Link>
            <Link href={'#'}>ESG & Impact</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Our Partner</ListHeader>
            <Link href={'#'}>Find a Partner</Link>
            <Link href={'#'}>OEM Solutions</Link>
            <Link href={'#'}>Partner Program</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Events</Link>
            <Link href={'#'}>Glossary</Link>
            <Link href={'#'}>Privacy Center</Link>
            <Link href={'#'}>Resource Library</Link>
          </Stack>
        </SimpleGrid>
      </Container>

    </Box>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
        <ListHeader><Link href={'#'}>LAP-DEN Technologies</Link></ListHeader>
        <ListHeader><Link href={'#'}>Premier</Link></ListHeader>
        </Stack>
      </Container>
    </Box>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Terms of Sale</Link>
          <Link href={'#'}>Privacy Statement</Link>
          <Link href={'#'}>Legal & Regulatory</Link>
          <Link href={'#'}>Accessibility</Link>
        </Stack>
      </Container>
    </Box>
    <Flex h="10px" justifyContent="right" alignItems="right" >
      <Button
      marginRight={"10px"}
        px={4}
        fontSize={'sm'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
       Contact Us
      </Button>
    </Flex>
    </>
  );
}