import './Modal.scss';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
/*
motion: 모션을 걸고 싶은 JSX 요소 앞쪽에 motion.을 추가하면 initial , animate, exit라는 속성으로 모션 설정 가능케하는 컴포넌트
animatePresence: 모션을 적용할 컴포넌트 Wrapping 컴포넌트 - 자식요소의 모션이 끝날때까지 언마운트 되는 시점을 holding 처리 
적용간으한 모션 속성: opacity, scale, rotate, x, y
*/

export default function Modal({ IsOpen, setIsOpen, children }) {
	useEffect(() => {
		document.body.style.overflow = IsOpen ? 'hidden' : 'auto';
	}, [IsOpen]);

	return (
		<AnimatePresence>
			{IsOpen && (
				<motion.aside
					className='modal'
					initial={{ opacity: 0, x: '100%', scale: 0.5 }} // JSX가 마운트되기 전 상태의 스타일
					animate={{ opacity: 1, x: '0%', scale: 1 }} //JSX가 마운트된 후의 스타일
					exit={{ opacity: 0, x: '-100%', scale: 1.5 }} // JSX가 앞으로 언마운트될때의 스타일
					transition={{ duration: 1 }} //스타일이 변경될떄의 전환시간
				>
					<motion.div
						className='con'
						initial={{ opacity: 0, rotate: 50 }}
						animate={{ opacity: 1, rotate: 0, transition: { delay: 1 } }}
						exit={{ opacity: 0, rotate: -50, scale: 1.5, transition: { delay: 1 } }}
					>
						{children}
					</motion.div>
					<motion.span onClick={() => setIsOpen(false)} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0, transition: { delay: 2 } }} exit={{ opacity: 0, x: 200 }}>
						close
					</motion.span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
}
