import './News.scss';
import { useState, useRef, useEffect } from 'react';

function News() {
	const dummyData = useRef([
		{ title: 'title5', content: 'content5', date: '2025 21:35:41' },
		{ title: 'title4', content: 'content4', date: '2024 21:35:41' },
		{ title: 'title3', content: 'content3', date: '2023 21:35:41' },
		{ title: 'title2', content: 'content2', date: '2022 21:35:41' },
		{ title: 'title1', content: 'content1', date: '2021 21:35:41' },
	]);
	const getLocalData = () => {
		const data = localStorage.getItem('posts');
		if (data) return JSON.parse(data);
		else return [];
	};

	const [News] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(News));
	}, [News]);

	return (
		<section className='news'>
			{News.map((post, idx) => {
				if (idx >= 5) return null;
				return <h2 key={idx}>{post.title}</h2>;
			})}
		</section>
	);
}

export default News;
