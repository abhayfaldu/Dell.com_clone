import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import StarRatings from "react-star-ratings";

const KeyboardMouse = () => {
  return (
    <>
      <Card maxW="lg" m={"3"}  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <CardBody>
          <Image
            src="https://i.dell.com/is/image/DellContent//content/dam/images/products/electronics-and-accessories/dell/pointing-devices/aw610m/aw610m-ckb-4050lb-gy.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500"
            alt="Green double couch with wooden legs"
            maxW={"220px"}
            m="auto"
            borderRadius="lg"
          />
          <Stack mt="5" spacing="0" textAlign={"left"}>
            <Heading
              size="md"
              color="#0076ce"
              fontWeight={"500"}
              textAlign={"left"}
            >
              Alienware Wired/Wireless Gaming Mouse | AW610M
            </Heading>
            <Text fontSize="sm">Manufacturer Part 85K48</Text>
            <Text fontSize="sm">Dell Part 580-AJNB</Text>
            <Box width={"200px"} display="flex" columnGap={2}>
              <StarRatings
                rating={4.3}
                starRatedColor="#0076ce"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="1px"
              />
              <Text>{"(179)"}</Text>
            </Box>

            <Text pt="2%" fontSize="sm">
              Online Price ₹{" "}
              <Text as={"span"} textDecorationLine="line-through">
                {"10000"}{" "}
              </Text>
            </Text>
            <Text>
              <Text fontSize="2xl" as="span" fontWeight={"500"}>
                ₹ {"600"}{" "}
              </Text>
              <Text fontSize="sm" as="span">
                Save ₹ {"400"}
              </Text>
            </Text>
            <Text fontSize={"sm"}>Price inclusive of GST. Free Delivery.</Text>
          </Stack>
        </CardBody>
        <Box textAlign={"left"} p={4}>
          <Text fontSize={"sm"}>Click "Buy Now" to shop this product on Lapden.com (Lapden Assured)</Text>
          <Button colorScheme={"twitter"} w="100%">Add to Cart</Button>
        </Box>
      </Card>
    </>
  );
};

export default KeyboardMouse;
