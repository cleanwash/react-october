import Layout from '../../common/layout/Layout';
import './Contact.scss';
import { useRef, useEffect } from 'react';

export default function Contact() {
	const { kakao } = window;
	const mapFrame = useRef(null);
	const mapOption = {
		center: new kakao.maps.LatLng(37.591936, 127.047674),
		level: 3,
	};
	var marker = new kakao.maps.Marker({
		position: mapOption.center,
	});

	useEffect(() => {
		const map = new kakao.maps.Map(mapFrame.current, mapOption);
		marker.setMap(map);
	}, []);

	return (
		<Layout title={'Contact Us'}>
			<article id='map' ref={mapFrame}></article>
		</Layout>
	);
}
