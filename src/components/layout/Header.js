import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    const link = {
        width : '120px',
        display : 'block',
        textDecoration: 'none',
    }

    return (
        <header className="App-header">
            <Nav>
                <ul>
                    <List><Link to="/" style={link}>종합상황판</Link></List>
                    <List><Link to="/Report" style={link}>보고서</Link></List>
                    <List><Link to="/Setting" style={link}>설정</Link></List>
                </ul>
            </Nav>
        </header>
    )
}

const List = styled.li`
  display : inline-block;
  list-style-type : none;
  margin-left : 20px;
  text-align : center;
  color : #000000;
  background-color : #FFFFFF;
  border : 5px solid #036299;
`

const Nav = styled.div`
  float: left;
`

export default Header;