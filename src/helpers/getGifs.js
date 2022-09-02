export const getGifs = async (category) => {
	const api_key = 'aO1eeIdZv7QbI2AgRuFefnoozQrOce1k';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;

	const res = await fetch(url);
	const { data } = await res.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
	return gifs;
};
