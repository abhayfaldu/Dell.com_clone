import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
  } from '@chakra-ui/react';
  
  export default function HomeRight({title,head,body,img}) {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          // spacing={{ base: 8, md: 10 }}
          // py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  img}
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} align={'center'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                fontSize={{ base: 'xl', sm: 'xl', lg: 'xl' }}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                {title}
              </Text>
              <br />
              <Text as={'span'} fontSize={{ base: '4xl', sm: '4xl', lg: '4xl' }} >
                {head}
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              {body}
            </Text>
            <Stack
            width={"50%"}
            align={"center"}
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                Show Now
              </Button>
              <Button
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'white'}
                color={"blue"}
                border={"1px solid blue"}
                bg={'white.400'}
                _hover={{ bg: 'blue.500' }}>
                Learn More
              </Button>
            </Stack>
          </Stack>
          
        </Stack>
      </Container>
    );
  }