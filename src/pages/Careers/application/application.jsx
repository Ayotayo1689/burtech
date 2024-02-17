import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";
import FirstStep from "./FirstStep";

function ApplyModal({ role }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const CloseModal = () => {
		onClose();
	};

	return (
		<>
			<Button
				onClick={onOpen}
				bg={"#4688E4"}
				color={"white"}
				fontWeight={"medium"}
				py={"1rem"}
				mt={"1rem"}
			>
				Apply
			</Button>

			<Modal isOpen={isOpen} onClose={CloseModal} closeOnOverlayClick={false}>
				<ModalOverlay />
				<ModalContent
					paddingBlock={4}
					width={[
						"95%", // 0-30em
					]}
				>
					<ModalCloseButton />

					<ModalBody>
						<FirstStep onClose={onClose} role={role}></FirstStep>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ApplyModal;
