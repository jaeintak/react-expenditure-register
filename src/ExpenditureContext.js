import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialExpenditures = [
	{
		id: 1,
		category: '식사',
		color: '#ffec99',
		text: '용개반점',
		price: 7000,
		display: true,
	},
	{
		id: 2,
		category: '식료품',
		color: '#d8f5a2',
		text: '양배추',
		price: 5000,
		display: true,
	},
	{
		id: 3,
		category: '교통',
		color: '#ffd8a8',
		text: '택시비',
		price: 20000,
		display: true,
	},
	{
		id: 4,
		category: '생활',
		color: '#e599f7',
		text: '관리비',
		price: 1000000,
		display: true,
	},
	{
		id: 5,
		category: '의료',
		color: '#74c0fc',
		text: '병원 진료',
		price: 7000,
		display: true,
	},
	{
		id: 6,
		category: '식사',
		color: '#ffec99',
		text: '스타벅스',
		price: 4000,
		display: true,
	},
];


function expenditureReducer(state, action) {
		switch (action.type) {
		case 'CREATE':
			return state.concat(action.expenditure);
		case 'EDIT':
			return null;
		case 'CHOOSE':
			return state.filter(expenditure => expenditure.category === action.value);
		case 'REMOVE':
			return state.filter(expenditure => expenditure.id !== action.id);
		case 'RESET':
			return state;
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}
const ExpenditureStateContext = createContext();
const ExpenditureDispatchContext = createContext();
const ExpenditureNextIdContext = createContext();

export function ExpenditureProvider({ children }) {
	const [state, dispatch] = useReducer(expenditureReducer, initialExpenditures);
	const nextId = useRef(7);
	return (
		<ExpenditureStateContext.Provider value={state}>
			<ExpenditureDispatchContext.Provider value={dispatch}>
				<ExpenditureNextIdContext.Provider value={nextId}>					
					{children}
				</ExpenditureNextIdContext.Provider>
			</ExpenditureDispatchContext.Provider>
		</ExpenditureStateContext.Provider>
	);
}

export function useExpenditureState(){
	const context = useContext(ExpenditureStateContext);
	if(!context){
		throw new Error('Cannot find ExpenditureProvider');
	}
	return context;
}

export function useExpenditureDispatch(){
	const context = useContext(ExpenditureDispatchContext);
	if(!context){
		throw new Error('Cannot find ExpenditureProvider');
	}
	return context;
}
export function useExpenditureNextId(){
	const context = useContext(ExpenditureNextIdContext);
	if(!context){
		throw new Error('Cannot find ExpenditureProvider');
	}
	return context;
}