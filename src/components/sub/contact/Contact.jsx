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

	//마커 이미지 인스턴스를 생성하기 위한 정보값들
	const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // 마커이미지의 주소입니다
	const imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
	const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
	var marker = new kakao.maps.Marker({
		position: mapOption.center,
		image: markerImage,
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
