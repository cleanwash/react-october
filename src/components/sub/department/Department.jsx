import Layout from '../../common/layout/Layout';
import { useState, useRef } from 'react';
import './Department.scss';

export default function Department() {
	console.log('re-render');
	// 리액트에 state 변경이 일어나면, 컴포넌트는 재랜더링됨
	// 바뀐 state값은 다음번 렌더링 사이클에서 변경된 값이 적용됨
	//화면의 정보값을 갱신해야 되는 중요한 변경사항이 아닌 요소를 state로 변경하면, 계속해서 컴포넌트가 재랜더링 되므로 비효율적
	//대표적인 사례: 단순 모션처리 위한 state 적용
	let [Num, setNum] = useState(0);
	const rotate = useRef(0);
	//가상돔 요소를 핸들러안쪽에서 호출하고 싶을때는 document.querySelector가 아닌
	//useRef를 통한 참조객체에 담아서 호출
	const box = useRef(null);
	console.log(box);

	let plus = () => {
		//setNum(++Num);
		++rotate.current;
		console.log('useRef', rotate);
		console.log('State', Num);
		console.log(box);
	};

	let minus = () => {
		//setNum(--Num);
		--rotate.current;
		console.log('useRef', rotate);
		console.log('State', Num);
	};

	//앞으로 넣어야 해당 state값이 바로 렌더링이 된다. 리액트에서는 전이증감연산자로 코드를 작성해야 된다.
	return (
		<Layout title={'Department'}>
			<button onClick={minus}>left</button>
			{/* <button onClick={() => setNum(Num + 1)}>plus</button> */}
			<button onClick={plus}>right</button>

			<article ref={box}></article>
		</Layout>
	);
}

/*
useRef: 특정값을 담기 위한 참조객체를 만드는 hook
-useRef를 통한 참조객체에 담겨있는 값은 component가 재호출 되더라도, 값이 초기화 되지 않고, 유지가됨
-useRef를 통한 참조객체의 값이 변경되더라도 컴포넌트를 재호출 하지 않음
-useRef를 통한 참조객체의 값이 변경되면 그 값은 해당 랜더링 사이클에서 바로 적용됨

-useRef를 써야되는 실사례
1. 가상돔 요소를 선택해서 제어해야 될 때
2. 특정값을 변경 처리할때 불필요하게 컴포넌트를 재호출 하고 싶지 않을때
*/
