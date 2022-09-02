import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [imagenes, setImagenes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const imag = await getGifs(category);
		setImagenes(imag);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
	}, []);

	return {
		imagenes,
		isLoading,
	};
};
