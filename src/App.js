import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Setting from './components/Setting';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import styled, {createGlobalStyle} from 'styled-components';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './components/redux/valueRangeSettings/reducer';
import store from './components/redux/store';
import './css/style.css';

// const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="wrap" style={{height: "100%"}}>
              <Header/>
                <Routes>
                  <Route exact path="/" element={<Dashboard />}></Route>
                  <Route path='/Report' element={<Report />}></Route>
                  <Route path='/Setting' element={<Setting />}></Route>
                </Routes>
          </div>
          <Footer sx={{display: "flex"}} />
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
