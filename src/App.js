import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Setting from './components/Setting';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import './css/style.css';

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

export default App;
