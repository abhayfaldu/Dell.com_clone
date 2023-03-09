import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import Loading from "./Loader";

import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  deleteProductData,
  getProductData,
  updateProductData,
} from "../Redux/Admin/action";

import { useToast } from "@chakra-ui/react";

const AdminStore = () => {
  const { product, isLoading } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [original_price, setOriginal_price] = useState("");
  const [discounted_price, setDiscounted_price] = useState("");
  const [graphics_card, setGraphics_card] = useState("");
  const [memory, setMemory] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const toast = useToast();

  const getToast = (success, msg) => {
    toast({
      title: "Product Status",
      description: msg,
      status: success,
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    dispatch(getProductData(page, setTotalCount));
  }, [page]);

  const handleDelete = (id) => {
    dispatch(deleteProductData(id, getToast)).then(() => {
      dispatch(getProductData(page, setTotalCount));
    });
  };
  const handleUpdate = () => {
    dispatch(
      updateProductData(
        id,
        discounted_price,
        original_price,
        graphics_card,
        memory,
        category,
        getToast
      )
    ).then(() => {
      dispatch(getProductData(page, setTotalCount));
      onClose();
      setOriginal_price("");
      setDiscounted_price("");
      setGraphics_card("");
      setCategory("");
      setMemory("");
    });
  };
  const handleModal = (id) => {
    setId(id);
    onOpen();
  };

  return (
    <Box>
      <Sidebar />

      <Box
        style={{
          width: "80vw",
          margin: "auto",
          marginRight: "35px",
          marginTop: "80px",
        }}
      >
        {" "}
        <TableContainer>
          <Table variant="striped" colorScheme="linkedin">
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>Preview_Image</Th>
                <Th>Product_Title</Th>
                <Th>Display_Size</Th>
                <Th>Original_Price</Th>
                <Th>After_Discount_Price</Th>
                <Th>Processor</Th>
                <Th>Rating</Th>
                <Th>Total_Views</Th>
                <Th>Category</Th>
                <Th>Storage</Th>
                <Th>Graphics_Card</Th>
                <Th>Operating_System</Th>
                <Th>Memory</Th>
                <Th>Update</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading && <Loading />}
              {!isLoading &&
                product?.map((el, i) => {
                  return (
                    <Tr key={i}>
                      <Td textAlign={"center"}>{(+page - 1) * 5 + i + 1}</Td>
                      <Td>
                        <Image
                          src={el.image_url[0]}
                          alt={el._id}
                          width={"100px"}
                        />
                      </Td>
                      <Td>{el.title}</Td>
                      <Td>{el.display}</Td>
                      <Td>{"₹ " + el.original_price}</Td>
                      <Td>{"₹ " + el.discounted_price}</Td>
                      <Td>{el.processor}</Td>
                      <Td>{el.rating}</Td>
                      <Td>{el.number_of_reviews}</Td>
                      <Td>{el.category}</Td>
                      <Td>{el.storage}</Td>
                      <Td>{el.graphics_card}</Td>
                      <Td>{el.OS}</Td>
                      <Td>{el.memory}</Td>
                      <Td>
                        <Button
                          onClick={() => handleModal(el._id)}
                          borderRadius="none"
                          colorScheme="whatsapp"
                          _hover={{
                            bg: "#152036",
                            color: "white",
                          }}
                        >
                          Update
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={() => handleDelete(el._id)}
                          borderRadius="none"
                          colorScheme="red"
                          _hover={{
                            bg: "#152036",
                            color: "white",
                          }}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Product Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Original Price</FormLabel>
                <Input
                  ref={initialRef}
                  type={"number"}
                  placeholder="Original_Price"
                  borderRadius="none"
                  value={original_price}
                  onChange={(e) => setOriginal_price(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Discounted Price </FormLabel>
                <Input
                  placeholder="Enter New Price"
                  type={"number"}
                  borderRadius="none"
                  value={discounted_price}
                  onChange={(e) => setDiscounted_price(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Category </FormLabel>
                <Input
                  placeholder="Enter New Product Category"
                  type={"text"}
                  borderRadius="none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Memory </FormLabel>
                <Input
                  placeholder="Update Memory Size"
                  type={"text"}
                  borderRadius="none"
                  value={memory}
                  onChange={(e) => setMemory(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Graphics Card </FormLabel>
                <Input
                  placeholder="Enter New Graphics"
                  type={"text"}
                  borderRadius="none"
                  value={graphics_card}
                  onChange={(e) => setGraphics_card(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                bg={"green"}
                borderRadius="none"
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                mr={3}
                onClick={handleUpdate}
              >
                Save
              </Button>
              <Button
                bg={"#152036"}
                borderRadius="none"
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box mt={2}>
          <Button
            _hover={{
              bg: "#152036",
              color: "white",
            }}
            onClick={() => setPage(page - 1)}
            isDisabled={page === 1}
          >
            Previous
          </Button>
          <Button bg={"lightblue"} mx={3}>
            {page}
          </Button>
          <Button
            _hover={{
              bg: "#152036",
              color: "white",
            }}
            onClick={() => setPage(page + 1)}
            isDisabled={page === Math.ceil(totalCount / 5)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminStore;
