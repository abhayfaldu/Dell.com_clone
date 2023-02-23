import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Box, Text } from "@chakra-ui/react";
// import {
//   deleteAdminProduct,
//   getMenAdminProduct,
//   updateAdminProduct,
// } from "../Redux/Admin/action";
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
import { getProductData } from "../Redux/Admin/action";

const AdminStore = () => {
  const { product, isLoading } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    dispatch(getProductData);
  }, []);

  const handleDelete = (id) => {
    // dispatch(deleteAdminProduct(id)).then(() => {
    //   dispatch(getMenAdminProduct);
    // });
  };
  const handleUpdate = () => {
    // let id = localStorage.getItem("key");
    // dispatch(updateAdminProduct(id, price, discount)).then(() => {
    //   dispatch(getMenAdminProduct);
    //   onClose();
    //   setPrice("");
    //   setDiscount("");
    // });
  };
  const handleModal = (id) => {
    // localStorage.setItem("key", id);
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
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>Brand</Th>
                <Th>Discount</Th>
                <Th>Price</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading && <Loading />}
              {!isLoading &&
                product?.map((el, i) => {
                  return (
                    <Tr>
                      <Td>{i + 1}</Td>
                      <Td>
                        <Image src={el.images} alt={el.id} />
                      </Td>
                      <Td>{el.title}</Td>
                      <Td>{el.brand}</Td>
                      <Td>{el.discount ? el.discount : "(65% OFF)"}</Td>
                      <Td>
                        {el.discounted_price ? el.discounted_price : "1600"}
                      </Td>
                      <Td>
                        <Button
                          onClick={() => handleModal(el.id)}
                          borderRadius="none"
                          colorScheme="whatsapp"
                          _hover={{
                            bg: "#152036",
                            color: "white",
                          }}
                        >
                          Edit
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={() => handleDelete(el.id)}
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
                <FormLabel>Price</FormLabel>
                <Input
                  ref={initialRef}
                  type={"number"}
                  placeholder="Price"
                  borderRadius="none"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Discount </FormLabel>
                <Input
                  placeholder="Discount"
                  type={"text"}
                  borderRadius="none"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
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
      </Box>
    </Box>
  );
};

export default AdminStore;
