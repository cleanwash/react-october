import './Community.scss';
import Layout from '../../common/layout/Layout';
import { TfiWrite } from 'react-icons/tfi';
import { ImCancelCircle } from 'react-icons/im';
import { useRef, useState } from 'react';

function Comunity() {
	const refInput = useRef(null);
	const refTextarea = useRef(null);
	const [Posts, setPosts] = useState([]);
	const resetPost = () => {
		refInput.current.value = '';
		refTextarea.current.value = '';
	};

	const createPost = () => {
		//기존의 Posts 배열값을 Deep Copy 한 다음, 새로운 객체값을 추가 (불변성 유지)
		if (!refInput.current.value.trim() || !refTextarea.current.value.trim()) {
			resetPost();
			return alert('제목값 본문을 모두 입력하세요 ');
		}
		setPosts([
			{
				title: refInput.current.value,
				content: refTextarea.current.value,
			},
			...Posts,
		]);
		resetPost();
	};

	return (
		<Layout title={'Community'}>
			<div className='wrap'>
				<div className='inputBox'>
					<input type='text' placeholder='title' ref={refInput} />
					<textarea cols='30' rows='3' placeholder='leave message' ref={refTextarea}></textarea>

					<nav>
						<button onClick={resetPost}>
							<ImCancelCircle fontSize={20} color={'#555'} />
						</button>
						<button onClick={createPost}>
							<TfiWrite fontSize={20} color={'#555'} />
						</button>
					</nav>
				</div>

				<div className='showBox'>
					{Posts.map((post, idx) => (
						<article key={idx}>
							<div className='txt'>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</div>
							<nav>
								<button>Edit</button>
								<button>Delete</button>
							</nav>
						</article>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default Comunity;

/*
CRUD
Create(글작성) "POST"
Read(글 불러오기) "GET"
Update(글 수정) "PUT"
Delete(글 삭제) "DELETE"

RESTful API : DB의 데이터를 구조적으로 변경하기 위한 개발방법론 

로컬저장소: Local Storage
- 모든 브라우저가 내장하고 있는 경량의 저장공간
- 문자값만 저장 가능(5 MB)
- 객체값을 문자화시켜서 저장
- 로컬 저장소 값을 불러올 때는, 반대로 문자형태를 JSON 형태로 객체로 parsing해서 가져옴

localStorage 메서드 
localStorage.setItem('키','문자화 된 데이터') :로컬 저장소에 데이터 저장
localStorage.getitem('키',) : 해당 데이터는 문자값으로 리턴되기 때문에 다시 객체 형태로 parsing 처리 필요 
*/
