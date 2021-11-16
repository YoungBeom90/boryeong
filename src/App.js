import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Setting from './components/Setting';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  
  const link = {
    width : '120px',
    display : 'block',
    textDecoration: 'none',
  }

  const progress = {
    position : "absolute",
    top : "50%"
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, []);

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
          <Fade in={loading} style={progress}>
            <CircularProgress/>
          </Fade>
        </Contents>
      </Container>
    </BrowserRouter>
  );
}

const GobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
`
export default App;
