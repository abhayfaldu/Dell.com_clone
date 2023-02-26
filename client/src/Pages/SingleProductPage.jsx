import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';

import { MdLocalShipping } from 'react-icons/md';
import StarRatings from 'react-star-ratings';
import Carousel from '../Components/Carousel';
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from '../Redux/Cart/action';
import { useToast } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';


export default function SingleProductPage() {
  const dispatch=useDispatch();
  const [data,setData]=useState({});
  const toast = useToast();
  const {id}=useParams();
  const getSingleProduct=()=>{
    axios.get(`http//:localhost:8080/products/${id}`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
useEffect(()=>{
  getSingleProduct()
},[])

  const getToast=(success,msg)=>{
    console.log(success,msg)
    toast({
      title: "Cart Status" ,
      description: msg,
      status: success,
      duration: 3000,
      isClosable: true,
    });
  }
  



  const handleCart=(title,original_price,discounted_price,image_url,)=>{
    dispatch(addToCart(title,original_price,discounted_price,image_url,getToast))
  }
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Stack>
        <Flex>
        <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Title: Dell Alienware
            </Heading>
            <Text
              fontWeight={500}
              fontSize={'2xl'}>
              Rating: <StarRatings
                rating={4.3}
                starRatedColor="#0076ce"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="1px"
              />
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-x17-r2/media-gallery/laptop-alienware-x17-r2-nonlit-touchpad-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=5000&hei=5000&qlt=100,1&resMode=sharp2&size=5000,5000&chrss=full&imwidth=5000'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Flex  alignItems="center"
        justifyContent="center">
          <Carousel />
        </Flex>
        <Flex>Original Price |  <Text as='s'>₹ 3,00,000</Text></Flex>
        <Flex>
        <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              ₹ 2,80,000
            </Heading>
            <Flex>Price inclusive of GST. Free Delivery.</Flex>
          </Box>
        </Flex>
        <Flex><Text fontWeight={500}
              fontSize={'xl'} color={"blue"}>Financing</Text></Flex>
        <Flex>EMI starts from ₹ 24,165.83 /month</Flex>
        <Flex>
        <Button
        onClick={()=>handleCart("Dell",123,100,"xyz")}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
        </Flex>
        <Flex>
        <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Flex>
        <Flex>
        <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <Text fontWeight={500}
              fontSize={'xl'} color={"blue"}>Click "Buy Now" to shop this product on LAP-DEN.com</Text>
          </Stack>
        </Flex>
        </Stack>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Box>
              <Text
              align={'start'}
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Processor | Which processor is right for you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Text border={"1px solid blue"} bg={"blue.100"} padding={"10px"}  >12th Gen Intel® Core™ i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)</Text>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                        align={"start"}
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Operating System | Which operating system is right for you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Text border={"1px solid blue"} bg={"blue.100"} padding={"10px"}  >12th Gen Intel® Core™ i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)</Text>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                        align={"start"}
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Graphics Card | Which graphics card is right for you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Text border={"1px solid blue"} bg={"blue.100"} padding={"10px"}  >12th Gen Intel® Core™ i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)</Text>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                        align={"start"}
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Memory | How much memory is right for you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Text border={"1px solid blue"} bg={"blue.100"} padding={"10px"}  >12th Gen Intel® Core™ i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)</Text>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                        align={"start"}
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Hard Drive | How much storage is right for you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Text border={"1px solid blue"} bg={"blue.100"} padding={"10px"}  >12th Gen Intel® Core™ i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)</Text>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                        align={"start"}
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Display | Which display is right for you?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Text border={"1px solid blue"} bg={"blue.100"} padding={"10px"}  >12th Gen Intel® Core™ i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)</Text>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                        align={"start"}
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Tech Specs
              </Text>

              <List spacing={2} align={"start"}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Title:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    No. Of Reviews:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Processor:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Original Price:
                  </Text>{' '}
                  bl ue
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Discounted Price:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Display:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Storage:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Graphics Card:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    OS:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}