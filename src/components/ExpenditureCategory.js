import React from 'react';
import styled from 'styled-components';

const ExpenditureCategoryBlock = styled.div`
padding: 20px 0px 20px 260px;
border-bottom: 1px solid #dee2e6;

form{
	font-size: 18px;
	color:#495057;
	font-weight: bold;
}
select{
	width:60px;
	height: 25px;
	margin-left:12px;
	font-weight: bold;
	color: #495057;
	cursor: pointer;
}
option{
	font-weight: bold;
	color: #495057;
	cursor: pointer;
}
`

function ExpenditureCategory(){
	return (
		<ExpenditureCategoryBlock>
			<form >카테고리별로 보기: 
				<select>
				<option value = "전체">전체</option>
				<option value ="식사">식사</option>
				<option value ="식표품">식료품</option>
				<option value ="교통">교통</option>
				<option value ="생활">생활</option>
				<option value ="의료">의료</option>
				</select>
			</form>
			
		</ExpenditureCategoryBlock>
	);
}

export default ExpenditureCategory;


