import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Setting from './components/Setting';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';

let winHeight = window.outerHeight + 'px';
function App() {
  const link = {
    width : '120px',
    display : 'block',
    textDecoration: 'none',
  }

  return (
    <BrowserRouter>
      <GobalStyle/>
      <Container>
        <header className="App-header">
          <Nav>
            <ul>
              <List><Link to="/" style={link}>종합상황판</Link></List>
              <List><Link to="/Report" style={link}>보고서</Link></List>
              <List><Link to="/Setting" style={link}>설정</Link></List>
            </ul>
          </Nav>
        </header>
        <Contents>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}></Route>
            <Route path='/Report' element={<Report />}></Route>
            <Route path='/Setting' element={<Setting />}></Route>
          </Routes>
        </Contents>
      </Container>
    </BrowserRouter>
    
  );
}

const GobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: ${winHeight};
    color: #FFFFFF;
    background-color: #282c34;
  }
`
const Container = styled.div`
  width: 100%;
`
const Nav = styled.div`
  float: left;
`

const List = styled.li`
  display : inline-block;
  list-style-type : none;
  margin-left : 20px;
  text-align : center;
  color : #000000;
  background-color : #FFFFFF;
  border : 5px solid #036299;
`

const Contents = styled.div`
  clear : both;
  text-align : center;
  overflow : hidden;
`
export default App;
