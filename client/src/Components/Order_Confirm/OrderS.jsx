import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../Utils/logo.png";
import { Link } from "react-router-dom";

export const OrderS = () => {
  const navigate = useNavigate();
  return (
    <Box height="100vh">
      <Modal
        isOpen={true}
        onClose={() => void 0}
        size="2xl"
        // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" mx="4">
          <ModalBody>
            <Stack
              maxW="xs"
              mx="auto"
              py={{
                base: "12",
                md: "16",
              }}
              spacing={{
                base: "6",
                md: "10",
              }}
            >
              <Image src={logo} alt="logo" />
              <Stack spacing="3" textAlign="center">
                <Text fontSize="lg">Thank You For Shopping</Text>
                <Text
                  color={useColorModeValue("blue.500", "blue.200")}
                  fontWeight="bold"
                  fontSize={{
                    base: "1xl",
                    md: "2xl",
                  }}
                  textTransform="uppercase"
                  transform="scale(1.2)"
                >
                  Your Order Has Been Successfully Placed
                </Text>
              </Stack>

              <Button
                fontSize="sm"
                textAlign="center"
                color={useColorModeValue("gray.600", "gray.400")}
                textDecoration="underline"
              >
                <Link to="/">Go To Home</Link>
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
