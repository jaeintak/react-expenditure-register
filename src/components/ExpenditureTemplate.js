import React from 'react';
import styled from 'styled-components';

const ExpenditureTemplateBlock = styled.div`
	background: white;
	width: 512px;
	height: 768px;
	position: relative;
	border-radius: 16px;

	margin: 0 auto;
	margin-top: 96px;
	margin-bottom: 32px;

	display: flex;
	flex-direction: column; 
`

function ExpenditureTemplate( {children} ){
	return (
		<ExpenditureTemplateBlock>{children}</ExpenditureTemplateBlock>
	);
}

export default ExpenditureTemplate;


