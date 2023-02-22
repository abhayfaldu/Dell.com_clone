import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import UserForm from "./UserForm";
const AddProduct = () => {
  return (
    <Box>
      <Box>
        <Sidebar />
      </Box>
      <UserForm />
    </Box>
  );
};

export default AddProduct;
