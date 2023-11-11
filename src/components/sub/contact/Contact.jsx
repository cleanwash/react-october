import Layout from '../../common/layout/Layout';
import './Contact.scss';
import { useRef, useEffect } from 'react';

export default function Contact() {
	const { kakao } = window;
	const mapFrame = useRef(null);
	const mapOption = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	useEffect(() => {
		const map = new kakao.maps.Map(mapFrame.current, mapOption);
	});

	return (
		<Layout title={'Contact Us'}>
			<article id='map' ref={mapFrame}></article>
		</Layout>
	);
}
