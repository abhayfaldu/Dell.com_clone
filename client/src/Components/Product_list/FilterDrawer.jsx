import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import FilterSection from "./FilterSection";

const FilterDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button
				ref={btnRef}
				bgColor="brand"
				color={"#fff"}
				onClick={onOpen}
				w={"100%"}
			>
				Filters
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				size={"sm"}
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton top={4} right={4} />
					<DrawerHeader justify="center">Select Filters</DrawerHeader>

					<DrawerBody>
						<FilterSection onClose={onClose} onOpen={onOpen} />
					</DrawerBody>

					<DrawerFooter display={'flex'} align="center">
						<Button variant="solid" bgColor={'brand'} color='white' onClick={onClose} w='100%'>
							Apply Filters
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default FilterDrawer;
