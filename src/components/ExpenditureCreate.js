import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import {
	useExpenditureDispatch,
	useExpenditureNextId,
} from '../ExpenditureContext';

const CircleButton = styled.div`
	background: #0b7285;
	&: hover {
		background: #1098ad;
	}
	&: active {
		background: #868e96;
	}
	x-index: 5;
	cursor: pointer;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	right: 15px;
	bottom: 15px;
	font-size: 60px;
	color: white;
	border-radius: 40px;
	border: none;
	outline: none;

	transition: 0.125s all ease-in;
	${props =>
		props.open &&
		css`
			display: none;
		`}
`;
const InsertFormPositioner = styled.div`
	width: 100%;
	position: relative;
	background: white;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
`;
const InsertForm = styled.form`
	display: flex;
	padding: 20px 36px 45px 36px;
	border-top: 1px solid #dee2e6;
	select {
		margin-right: 10px;
		width: 56px;
		font-size: 12px;
		font-weight: bold;
		color: #495057;
		cursor: pointer;
	}
	button {
		border: none;
		border-radius: 4px;
		background: #c92a2a;
		color: white;
		font-size: 17px;
		font-weight: bold;
		padding: 10px 20px;
		margin-left: 47px;
	}
`;

const Input = styled.input`
	padding: 7px;
	margin-right: 10px;
	border-radius: 4px;
	border: 1px solid #495057;
	font-size: 17px;
	box-sizing: borer-box;
	width: 120px;
	${props =>
		props.price &&
		css`
			width: 80px;
		`}
`;

function ExpenditureCreate() {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');
	//const [price, setPrice] = useState('');
	const dispatch = useExpenditureDispatch();
	const nextId = useExpenditureNextId();

	const onToggle = () => setOpen(!open);
	const onChange = e => {
		setText(e.target.text);
	};
	const onSubmit = e => {
		e.preventDefault();
		dispatch({
			type: "CREATE",
			expenditure: {
				id: nextId.current,
				category: "미정",
				color: '#91a7ff',
				text: text,
				price: 0,
			},
		});
		setText('');
		//setPrice('');
		setOpen(false);
		nextId.current += 1; 
	};

	return (
		<>
			{open && (
				<InsertFormPositioner>
					<InsertForm>
						<select>
							<option value="식사">식사</option>
							<option value="식표품">식료품</option>
							<option value="교통">교통</option>
							<option value="생활">생활</option>
							<option value="의료">의료</option>
						</select>
						<Input onChange={onChange} placeholder="지출내용을 입력해주세요." />
						<Input
							onChange={onChange}
							price={true}
							placeholder="지출금액을 입력해주세요."
						/>
						<button onSubmit={onSubmit}>입력</button>
					</InsertForm>
				</InsertFormPositioner>
			)}
			<CircleButton onClick={onToggle} open={open}>
				<MdAdd />
			</CircleButton>
		</>
	);
}

export default ExpenditureCreate;
