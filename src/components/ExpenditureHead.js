
import React from 'react';
import styled from 'styled-components';
import { useExpenditureState } from '../ExpenditureContext';

const ExpenditureHeadBlock = styled.div`
padding-top: 48px;
padding-left: 32px;
padding-right: 32px;
border-bottom: 1px solid #dee2e6;
h1{
	margin: 0;
	color: #212529;
}
.day{
	margin-top: 5px;
	color: #868e96;
	font-size: 15px;
	font-weight: bold;
}
.total{
	color: #c92a2a;
	font-size: 20px;
	margin-top: 15px;
	margin-bottom: 12px;
	font-weight: bold;
}
`

function ExpenditureHead() {
	const expenditures = useExpenditureState();
	let total = 0;
	expenditures.forEach(expenditure => {
		if(expenditure.display) total += expenditure.price;
		return total;
	});


	const today = new Date();
	const dateString = today.toLocaleDateString('ko-KR',{
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	
	return (
		<ExpenditureHeadBlock>
			<h1>오늘의 지출</h1>
			<div className="day">{dateString}</div>
			<div className="total">총 지출: -{total}원</div>
		</ExpenditureHeadBlock>
	);
}

export default ExpenditureHead;