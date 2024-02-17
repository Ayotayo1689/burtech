import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	ModalCloseButton,
} from "@chakra-ui/react";

import QouteForm from "./QouteForm";
function QouteModal({ modelID, name, productId }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button bg={"#4688E4"} onClick={onOpen} color={"white"}>
				Request a Qoute
			</Button>

			<Modal
				closeOnOverlayClick={false}
				isOpen={isOpen}
				onClose={onClose}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{name}
						<br />
						Model: <span className="red-font">{modelID} </span>{" "}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<QouteForm
							model={modelID}
							name={name}
							productId={productId}
							onClose={onClose}
						/>
					</ModalBody>

					{/* <ModalFooter>
						<Button bg={"#4688E4"} color={"white"} onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter> */}
				</ModalContent>
			</Modal>
		</>
	);
}

export default QouteModal;
