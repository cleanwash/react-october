import Layout from '../../common/layout/Layout';
import './Contact.scss';
import { useRef, useEffect } from 'react';

export default function Contact() {
	const { kakao } = window;
	const mapFrame = useRef(null);
	const mapOption = {
		//위치값 정밀하게 복사하는 법
		//기존 구글지도 위치값 복사 뒤, 카카오예제의 클릭한 위치 마커표시 직접해보기
		//해당 코드 붙여넣기 하고, 원하는 지점을 찍으면 아래와 같이 정밀한 수치값을 확인가능
		center: new kakao.maps.LatLng(37.592422981858604, 127.04710339920344),
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
