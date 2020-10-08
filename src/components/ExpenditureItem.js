import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useExpenditureDispatch } from '../ExpenditureContext';

const ExpenditureItemBlock = styled.div`
	display: flex;
	align-item: center;
	padding: 9px 0;
`;

const styleCategory = css`
	${({ color }) => css`
		background: ${color};
	`}
`;

const Category = styled.div`
	border-radius: 8px;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	color: #343a40;
	display: flex;
	align-item: center;
	justify-content: center;
	margin-right: 24px;
	${styleCategory};
`;

const Text = styled.div`
	flex: 1;
	font-size: 18px;
	color: #343a40;
	font-weight: bold;
	padding: 9px;
	& + & {
		margin-right: 2 rem;
	}
	${props =>
		props.price &&
		css`
			color: #c92a2a;
		`}
`;

const Edit = styled.div`
	padding: 10px;
	display: flex;
	align-item: center;
	justify-content: center;
	font-size: 25px;
	color: #343a40;
	&: hover {
		cursor: pointer;
		color: #868e96;
	}
`;

const Remove = styled.div`
	display: flex;
	padding: 10px;
	align-item: center;
	justify-content: center;
	font-size: 24px;
	cursor: pointer;
	color: #343a40;
	&: hover {
		cursor: pointer;
		color: #868e96;
	}
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
	padding: 20px 0px;
	border-top: 1px solid #dee2e6;
	border-bottom: 1px solid #dee2e6;
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

function ExpenditureItem({ id, category, color, text, price, display }) {
	const [open, setOpen] = useState(false);
	const [state, setState] = useState({
		text: text,
		price: price,
		category: category,
	});
	const dispatch = useExpenditureDispatch();
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
			type: 'EDIT',
			expenditure: {
				id: id,
				color: color,
				category: state.category,
				text: state.text,
				price: parseInt(state.price),
			},
		});
		setOpen(false);
	}
	const onRemove = () =>
		dispatch({
			type: 'REMOVE',
			id,
		});

	return (
		<>
			{display && (
				<ExpenditureItemBlock>
					<Category color={color}>{category}</Category>
					<Text>{text}</Text>
					<Text price={true}>-{price}</Text>
					<Edit onClick={onToggle} open={open}>
						<MdEdit />
					</Edit>
					<Remove onClick={onRemove}>
						<MdDelete />
					</Remove>
				</ExpenditureItemBlock>
			)}
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
						<Input name="text" value={state.text} onChange={onChange} />
						<Input
							name="price"
							value={state.price}
							onChange={onChange}
							priceInput={true}
						/>
						<button>완료</button>
					</InsertForm>
				</InsertFormPositioner>
			)}
		</>
	);
}

export default ExpenditureItem;
