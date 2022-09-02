import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
	const { imagenes, isLoading } = useFetchGifs(category);
	return (
		<>
			<h3>{category}</h3>

			{isLoading && (
				<div className="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}

			<div className="card-grid">
				{imagenes.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
