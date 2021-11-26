import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import logo from '../../img/logo.png';


const Header = () => {
    
    const menuClickEvent = (e) => {
        let currentMenu = document.querySelector(".active");
        console.log(e);
        if(e.target.className === "") {
            currentMenu.className = "";
            e.target.className = "active";
        } 
    }
    

    return (
         // <!-- 헤더 -->
		<header>			
			{/* <!-- GNB --> */}
			<div className="gnb">
				{/* <!-- 로고 --> */}
				<div className="logo">
					<a href="#"><img src={logo} /> <h1>보령 해저터널 해저관로구간 상황판</h1></a>
				</div>
				{/* <!-- //로고 --> */}
				<ul className="nav">
					<li><Link to="/" className="active" onClick={menuClickEvent}>종합상황판</Link></li>
					<li><Link to="/Report" onClick={menuClickEvent}>보고서</Link></li>
					<li><Link to="/Setting" onClick={menuClickEvent}>설정</Link></li>
				</ul>
			</div>
			{/* <!-- //GNB --> */}
		</header>
		// <!-- //헤더 -->
    )
}

export default Header;