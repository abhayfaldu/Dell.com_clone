import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../../Utils/logo.png";

export const OrderS = () => {
  return (
    <Box height="100vh">
      <Modal
        isOpen={true}
        onClose={() => void 0}
        size="2xl"
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
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
