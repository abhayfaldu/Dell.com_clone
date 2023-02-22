import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
// import {
//   addChildAdminProduct,
//   addMenAdminProduct,
//   addWomenAdminProduct,
// } from "../Redux/Admin/action";

const Form1 = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Product Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="title" fontWeight={"normal"}>
            Title
          </FormLabel>
          <Input
            name="title"
            placeholder="Product Title"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="display" fontWeight={"normal"}>
            Display
          </FormLabel>
          <Input
            name="display"
            placeholder="Enter Product Display Size"
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl>
        <FormLabel htmlFor="processor" fontWeight={"normal"}>
          Processor
        </FormLabel>
        <Input
          name="processor"
          placeholder="Enter product processor details"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="Category" fontWeight={"normal"}>
          Category
        </FormLabel>

        <Select
          name="category"
          autoComplete="category"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        >
          <option value={"Laptop"}>Laptop</option>
          <option value={"PC"}>PC</option>
          <option value={"Headphone"}>Headphone</option>
        </Select>
      </FormControl>
    </>
  );
};

const Form2 = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Additional Details
      </Heading>
      <FormControl as={GridItem} colSpan={[3, 2]}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Image
        </FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon
            bg="gray.50"
            _dark={{
              bg: "gray.800",
            }}
            color="gray.500"
            rounded="md"
          >
            http://
          </InputLeftAddon>
          <Input
            name="image_url"
            type="url"
            placeholder="Enter Image Url"
            focusBorderColor="brand.400"
            rounded="md"
            onChange={handleChange}
          />
        </InputGroup>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="price"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Original Price
        </FormLabel>
        <Input
          type="number"
          name="original_price"
          autoComplete="original_price"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter Product Original Price"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="discount"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Discounted Price
        </FormLabel>
        <Input
          type="text"
          name="discounted_price"
          autoComplete="discounted_price"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter Discounted Price"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="Storage"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Storage
        </FormLabel>
        <Input
          type="text"
          name="storage"
          id="storage"
          autoComplete="storage"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter Storage of device"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="Memory"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Memory Size
        </FormLabel>
        <Input
          type="text"
          name="memory"
          id="memory"
          autoComplete="memory"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter available memory storage "
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Optional Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="graphics_card"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Graphic Card
          </FormLabel>
          <Select
            id="graphics_card"
            name="graphics_card"
            autoComplete="graphics_card"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          >
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
          </Select>
        </FormControl>

        {/* <FormControl id="discription" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Operating System
          </FormLabel>
          <Textarea
            placeholder="Product Discription"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
        </FormControl> */}
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="os"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Operating System
          </FormLabel>
          <Input
            type="text"
            name="os"
            id="os"
            autoComplete="os"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            placeholder="Enter Storage of device"
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
    </>
  );
};

const initialData = {
  title: "",
  category: "",
  processor: "",
  image_url: "",
  discounted_price: "",
  original_price: "",
  display: "",
  storage: "",
  memory: "",
  graphics_card: "",
  os: "",
};

export default function UserForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();

  const handleClick = () => {
    // if (data.category === "Men") {
    //   dispatch(addMenAdminProduct(data));
    // } else if (data.category === "Women") {
    //   dispatch(addWomenAdminProduct(data));
    // } else if (data.category === "Child") {
    //   dispatch(addChildAdminProduct(data));
    // }

    toast({
      title: "Product Added",
      description: "Product Added Successfully Added in website",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log(data);
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        mt="120px"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          colorScheme={"facebook"}
        ></Progress>
        {step === 1 ? (
          <Form1 data={data} setData={setData} />
        ) : step === 2 ? (
          <Form2 data={data} setData={setData} />
        ) : (
          <Form3 data={data} setData={setData} initialData={initialData} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleClick}
                // onClick={() => {
                //
                // }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
