import React from 'react';
import { ExpenditureProvider } from './ExpenditureContext';
import ExpenditureTemplate from './components/ExpenditureTemplate';
import ExpenditureHead from './components/ExpenditureHead';
import ExpenditureCategory from './components/ExpenditureCategory';
import ExpenditureList from './components/ExpenditureList';
import ExpenditureCreate from './components/ExpenditureCreate';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
body{
  background: #dee2e6;
}`

function App() {
  return (

    <ExpenditureProvider>
    <GlobalStyle />
      <ExpenditureTemplate>
        <ExpenditureHead />
        <ExpenditureCategory /> 
        <ExpenditureList />
        <ExpenditureCreate/>
      </ExpenditureTemplate>
      </ExpenditureProvider>
  );
}

export default App;
