import Layout from '../../common/layout/Layout';
import { useState, useRef } from 'react';
import './Department.scss';
import Modal from '../../common/modal/Modal';

export default function Department() {
	const [Open, setOpen] = useState(false);
	return (
		<Layout title={'Department'}>
			<button onClick={() => setOpen(!Open)}>{Open ? 'close' : 'open'}</button>
			{/* {Open ? <Modal /> : null}
			 */}
			{Open && <Modal />}
		</Layout>
	);
}

/*
return문 바깥쪽에서는 모든 스크립트 구문을 다 활용이 가능하나, 
JSX 구문 안쪽에서는 {}를 통해서 할 수 있는 연산 3가지 
1. 변수치환
2. map으로 반복처리
3. 삼항연산자, && 연산자를 통한 분기처리 
*/
