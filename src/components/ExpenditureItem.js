import React from 'react';
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
	&+&{
		margin-right: 2 rem;
	}
	${props=>props.price && css`
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

function ExpenditureItem({ id, category, color, text, price }) {
	const dispatch = useExpenditureDispatch();
	const onEdit = () =>
		dispatch({
			type: 'EDIT',
			id,
		});
	const onRemove = () =>
		dispatch({
			type: 'REMOVE',
			id,
		});
	return (
		<ExpenditureItemBlock>
			<Category color={color}>{category}</Category>
			<Text>
				{text}
			</Text>
			<Text price={true}>
				-{price}
			</Text>
			<Edit onClick ={onEdit}>
				<MdEdit />
			</Edit>
			<Remove onClick={onRemove}>
				<MdDelete />
			</Remove>
		</ExpenditureItemBlock>
	);
}

export default ExpenditureItem;
