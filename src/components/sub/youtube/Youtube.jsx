import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useFetch } from '../../../hooks/useFetch';
import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';

export default function Youtube() {
	const [Vids, setVids] = useState([]);
	//const fetchData = useFetch();
	console.log(Vids);
	useEffect(() => {
		const api_key = 'AIzaSyA4fPQW6aWLzMytURErC1gX5nsK2Zq4M3I';
		const pid = 'PLN5pyyn6C7blzMwK49t-fT9wdJ4bQgKjT';
		const num = 10; //10개 추가해서
		const baseURL = `https://www.googleapis.com/youtube/v3/playlists?key=${api_key}&part=snippet&playlistId=${pid}&maxResults	=${num}`;
		//fetchData(baseURL, setVids);
		fetch(baseURL)
			.then((data) => data.json())
			.then((json) => {
				console.log(json.items);
				setVids(json.items);
			});
	}, []);

	return (
		<Layout title={'Youtube'}>
			{Vids.map((data, idx) => {
				return (
					<article key={idx}>
						<h2>{data.snippet.title}</h2>
						<p>{data.snippet.description}</p>
						<div className='pic'>
							{/* 썸네일 링크 클릭 시, URL로 detail/고유 유튜브 데이터 id */}
							<Link to={`/detail/${data.id}`}>
								<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
							</Link>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
