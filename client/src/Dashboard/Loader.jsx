import { Box, Image } from "@chakra-ui/react";
import React from "react";
import loader from "./Utils/Loader.gif";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      mt={"180px"}
      ml={"400px"}
    >
      <Image src={loader} w={"100%"} h={"100%"} bg={"blackAlpha.100"} />
    </Box>
  );
};

export default Loading;
