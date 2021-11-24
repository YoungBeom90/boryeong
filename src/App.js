import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Setting from './components/Setting';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import styled, {createGlobalStyle} from 'styled-components';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import './css/style.css';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route path='/Report' element={<Report />}></Route>
            <Route path='/Setting' element={<Setting />}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

// const GobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     color: #FFFFFF;
//     background-color: #282c34;
//   }
// `
// const Container = styled.div`
//   width: 100%;
// `

// const Contents = styled.div`
//   clear : both;
//   text-align : center;
// `
export default App;
