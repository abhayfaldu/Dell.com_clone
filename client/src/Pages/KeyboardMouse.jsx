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

import data from "../Utils/mouse.json";

const KeyboardMouse = () => {
  return (
    <>
      <Box>
        <Heading pt={"3%"} pb={"2%"}>
          Keyboard & Mouse
        </Heading>
        <Box w={"100%"} margin={"auto"}>
          <Box
            display={"grid"}
            flexDir={"column"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            justifyContent={"space-evenly"}
            w={"90%"}
            rowGap="5"
            margin={"auto"}
          >
            {data.map((el, i) => {
              return (
                <Card
                  key={i}
                  m="auto"
                  maxW="lg"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <CardBody>
                    <Image
                      src={el.image_url}
                      alt="Green double couch with wooden legs"
                      maxW={"220px"}
                      w={{ base: "100px",md:"220px" }}
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
                        {el.title}
                      </Heading>
                      <Text fontSize="sm">{el.manufacturer}</Text>
                      <Text fontSize="sm">{el.parts}</Text>
                      <Box width={"200px"} display="flex" columnGap={2}>
                        <StarRatings
                          rating={+el.rating}
                          starRatedColor="#0076ce"
                          numberOfStars={5}
                          name="rating"
                          starDimension="20px"
                          starSpacing="1px"
                        />
                        <Text>{el.no_of_reviews}</Text>
                      </Box>

                      <Text pt="2%" fontSize="sm">
                        Online Price
                        <Text as={"span"} textDecorationLine="line-through">
                          {"₹ " + el.original_price}{" "}
                        </Text>
                      </Text>
                      <Text>
                        <Text fontSize="2xl" as="span" fontWeight={"500"}>
                          {"₹ " + el.discounted_price}{" "}
                        </Text>
                        <Text fontSize="sm" as="span">
                          Save ₹ {Math.floor(Math.random() * 1000) + 500}
                        </Text>
                      </Text>
                      <Text fontSize={"sm"}>
                        Price inclusive of GST. Free Delivery.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Box textAlign={"left"} p={4}>
                    <Text fontSize={"sm"}>
                      Click "Buy Now" to shop this product on Lapden.com (Lapden
                      Assured)
                    </Text>
                    <Button colorScheme={"twitter"} w="100%">
                      Add to Cart
                    </Button>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default KeyboardMouse;
