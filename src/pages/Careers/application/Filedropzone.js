import { useDropzone } from "react-dropzone";
import { Box, Text } from "@chakra-ui/react";

const FileDropzone = ({ onDrop, file }) => {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	return (
		<Box {...getRootProps()} p={4} border="2px dashed #ccc">
			<input {...getInputProps()} />
			{file ? (
				<Text textAlign={"center"}>{file.name}</Text>
			) : isDragActive ? (
				<Text textAlign={"center"}>Drop the files here ...</Text>
			) : (
				<Text textAlign={"center"}>Please Upload Your Cv</Text>
			)}
		</Box>
	);
};

export default FileDropzone;
