import React from 'react';
import styled from 'styled-components';
import ExpenditureItem from './ExpenditureItem';
import { useExpenditureState } from '../ExpenditureContext';

const ExpenditureListBlock = styled.div`
flex: 1;
padding: 10px 32px;
overflow-y: auto;
`

function ExpenditureList(){
	const expenditures = useExpenditureState();

	return (
		<ExpenditureListBlock>
		{expenditures.map(expenditure =>(
			<ExpenditureItem
			key={expenditure.id}
			id={expenditure.id}
			category={expenditure.category}
			color={expenditure.color}
			text={expenditure.text}
			price={expenditure.price} />
			))}
		</ExpenditureListBlock>
	);
}

export default ExpenditureList;


