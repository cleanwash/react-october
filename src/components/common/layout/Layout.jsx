import './Layout.scss';

export default function Layout({ children, title }) {
	let newClass = title.toLowerCase().split(' ').join('_');
	//문자열.split(구분자) : 구분자 기준으로 배열로 반환
	//배열.join(구분자) : 배열을 구분자로 연결해서 하나의 문자로 반환
	//newClass = newClass.;
	//newClass = newClass.join('_');
	console.log('newClass는', newClass);
	//console.log('props는', props);
	//자식 컴포넌트에서 props.children
	//해당 컴포넌트에서 wrapping 되고 있는 자식요소가 전달
	return (
		<section className={`layout ${newClass}`}>
			<h1>{title}</h1>
			{children}
		</section>
	);
}

/*
리액트 : 단방향 데이터 바인딩 
데이터가 무조건 부모에서 자식으로만 전달 가능하다.

부모에서 자식 컴포넌트로 데이터 전달하는 방법
1. 자식컴포넌트에 전달되는 props 객체의 children
-- 부모 컴포넌트가 감싸고 있는 모든 요소들이 전달됨 

2. 부모컴포넌트에 커스텀 props라는 속성에 직접 값을 대입해서 전달하는 방식 
--컴포넌트 호출 시 커스텀속성으로 원하는 값을 전달
*/
