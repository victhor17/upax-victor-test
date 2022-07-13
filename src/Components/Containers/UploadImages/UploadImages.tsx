import React, { useState } from 'react';
import { LoaderContainer } from './UploadImagesStyles';
import { FileUploader } from 'react-drag-drop-files';
import ImageViewer from 'react-simple-image-viewer';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { setImages, selectImages } from '../../../Redux/imagesSlice';

const types: String[] = ['png', 'jpeg', 'jpg'];
const filesType: string[] = [];
const files2Type: FileList = {
	length: 0,
	item: function (index: number): File | null {
		throw new Error('Function not implemented.');
	},
	[Symbol.iterator]: function (): IterableIterator<File> {
		throw new Error('Function not implemented.');
	},
};

const UploadImages = () => {
	const typeError = () => {
		toast.error('Alguno de los archivos no tiene extensión png, jpeg o jpg');
	};

	const [showPreview, setShowPreview] = useState(false);
	const [files, setFiles] = useState(files2Type);
	const [urls, setUrls] = useState(filesType);
	const [showSavedImages, setShowSavedImages] = useState(false);
	const dispatch = useAppDispatch();
	const savedImages = useAppSelector(selectImages);

	const onSaveImages = () => {
		console.log(files);
		dispatch(setImages(urls));
		setUrls([]);
	};

	const onChange = (data: FileList) => {
		if (data.length) {
			setShowPreview(true);
			setFiles(data);
			setUrls(() => {
				let strings: string[] = [];
				for (const file of data) {
					strings.push(URL.createObjectURL(file));
				}
				return strings;
			});
		}
		console.log(data);
	};
	return (
		<LoaderContainer>
			<FileUploader
				types={types}
				multiple
				label='Sube o arrastra imágenes aquí'
				hoverTitle='Suelta aquí'
				onTypeError={typeError}
				handleChange={onChange}
			/>
			{urls.length ? <Button onClick={onSaveImages}>Guardar</Button> : ''}
			{savedImages.length ? (
				<Button onClick={() => setShowSavedImages(true)}> Ver guardadas</Button>
			) : (
				''
			)}
			{showPreview && (
				<>
					<ImageViewer onClose={() => setShowPreview(false)} src={urls} />
				</>
			)}
			{savedImages.length && showSavedImages ? (
				<>
					<ImageViewer
						onClose={() => setShowSavedImages(false)}
						src={savedImages}
					/>
				</>
			) : (
				''
			)}
		</LoaderContainer>
	);
};

export default UploadImages;
