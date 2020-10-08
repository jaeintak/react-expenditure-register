import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useExpenditureDispatch, useExpenditureNextId } from '../ExpenditureContext';

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
		props.priceInput &&
		css`
			width: 80px;
		`}
`;

function ExpenditureCreate() {
	const [open, setOpen] = useState(false);
	const [state, setState] = useState({
		text: '',
		price: '',
		category: '전체',
	});
	const dispatch = useExpenditureDispatch();
	const nextId = useExpenditureNextId();

	const onToggle = () => setOpen(!open);

	const onChoose = e => {
		setState({
			...state,
			category: e.target.value,
		});
	};

	const onChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		let color ='';

		switch (state.category) {
			case '식사':
				color = '#ffec99';
				break;
			case '식료품':
				color = '#d8f5a2';
				break;
			case '교통':
				color = '#ffd8a8';
				break;
			case '생활':
				color = '#e599f7';
				break;
			case '의료':
				color = '#74c0fc';
				break;
			default:
				color = 'white';
				break;
		}
		dispatch({
			type: 'CREATE',
			expenditure: {
				id: nextId.current,
				category: state.category,
				color: color,
				text: state.text,
				price: parseInt(state.price),
				display: true,
			},
		});
		setState({
			text: '',
			price: '',
			category: '전체',
		});
		setOpen(false);
		nextId.current += 1;
	};

	return (
		<>
			{open && (
				<InsertFormPositioner>
					<InsertForm onSubmit={onSubmit}>
						<select onChange={onChoose} name="category">
							<option value="전체">전체</option>
							<option value="식사">식사</option>
							<option value="식료품">식료품</option>
							<option value="교통">교통</option>
							<option value="생활">생활</option>
							<option value="의료">의료</option>
						</select>
						<Input
							name="text"
							value={state.text}
							onChange={onChange}
							placeholder="지출내용을 입력해주세요."
						/>
						<Input
							name="price"
							value={state.price}
							onChange={onChange}
							priceInput={true}
							placeholder="지출금액을 입력해주세요."
						/>
						<button>입력</button>
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
