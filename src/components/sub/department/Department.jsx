import Layout from '../../common/layout/Layout';
import { useState } from 'react';
import './Department.scss';

export default function Department() {
	console.log('re-render');
	// 리액트에 state 변경이 일어나면, 컴포넌트는 재랜더링됨
	// 바뀐 state값은 다음번 렌더링 사이클에서 변경된 값이 적용됨
	let [Num, setNum] = useState(0);
	let minus = () => setNum(--Num);
	let plus = () => setNum(++Num);
	console.log(Num);
	//앞으로 넣어야 해당 state값이 바로 렌더링이 된다. 리액트에서는 전이증감연산자로 코드를 작성해야 된다.
	return (
		<Layout title={'Department'}>
			<button onClick={minus}>left</button>
			{/* <button onClick={() => setNum(Num + 1)}>plus</button> */}
			<button onClick={plus}>right</button>

			<article style={{ transform: `rotate(${45 * Num}deg)` }}></article>
		</Layout>
	);
}

/*
	리액트에서 대표적인 hook 3대장 
	useState
	-화면렌더링을 담당하는 중요 데이터를 관리해주는 그릇 
	-화면의 모든 변경사항은 State에 담아서 관리 및 렌더링
	-state값이 변경되면 리액트는 무조건 컴포넌트를 재호출해서 화면을 다시 랜더링
	
	useEffect
	-컴포넌트 생명주기 관리(Life Cycle)
	-컴포넌트의 생성(Mount)
	-컴포넌트의 변경(Stage Change)
	-컴포넌트의 소멸 (UnMount)
	-컴포넌트의 생성, 변경, 소멸시 특정 이벤트 호출해야 될 때, 주로 사용
	
	useRef
	-컴포넌트가 재호출되더라도 사라지면 안되는 값을 담는 그릇
	-메모리 상에만 존재하는 최신 가상돔을 선택해야 될 때 담는 용도
*/
