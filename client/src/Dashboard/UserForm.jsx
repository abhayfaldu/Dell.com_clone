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
} from "@chakra-ui/react";
import BeatLoader from "react-spinners/BeatLoader";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postProductData } from "../Redux/Admin/action";

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
          <Select
            name="display"
            autoComplete="graphics_card"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleChange}
          >
            <option>35.5-cm. touch display Full HD (1920X1200)</option>
            <option>60.5-cm. display Full HD (1920X1080)</option>
            <option>40.6-cm. touch display Ultra HD (3840X2400) OLED</option>
            <option>39.6-cm. display Full HD (1920X1080)</option>
          </Select>
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
          <option>Laptop</option>
          <option>Desktop</option>
          <option>All-In-One</option>
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
          type="number"
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

        <Select
          type="text"
          name="storage"
          id="storage"
          autoComplete="storage"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        >
          <option>256 GB, M.2, PCIe NVMe, SSD</option>
          <option>512 GB, M.2, PCIe NVMe, SSD</option>
          <option>
            256GB M.2 PCIe NVMe Solid State Drive (Boot) + 1TB 5400 rpm 2.5"
            SATA Hard Drive (Storage)
          </option>
        </Select>
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
            onChange={handleChange}
          >
            <option>NVIDIA® GeForce® MX550, 2 GB GDDR6</option>
            <option>AMD Radeon™ Graphics with shared graphics memory</option>
            <option>Intel® UHD Graphics</option>
            <option>NVIDIA® GeForce® MX550, 2 GB GDDR6</option>
          </Select>
        </FormControl>

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
            name="OS"
            id="OS"
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
  OS: "",
};

export default function UserForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(33.33);

  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(postProductData(data));
    setTimeout(() => {
      toast({
        title: "Successfully Added.",
        description: "You have added product successfully.",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setLoading(false);
      setStep(1);
      setProgress(33.33);
    }, 2000);
    setLoading(true);
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
                colorScheme="red"
                variant="solid"
                isLoading={loading}
                loadingText="Submitting"
                spinner={<BeatLoader size={10} color="white" />}
                onClick={handleClick}
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
