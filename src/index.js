import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";
// import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
// import { UserProvider } from './context/user-context';


import GameRouletteGame from './page/GameRouletteGame';
import Index from './page/index';
import GameJackpot from './page/GameJackpot';
import GameAlphabetSoup from './page/GameAlphabetSoup';
import Login from './page/login';

import reportWebVitals from './reportWebVitals';
import './index.css';
import 'antd/dist/antd.css'; 

ReactDOM.render(
  <React.StrictMode>
    {/* <UserProvider> */}
      <HashRouter>
          <Routes>
              <Route exact path="/" element={<Index />} />
              <Route path="/GameRouletteGame" element={<GameRouletteGame />} />
              <Route path="/GameAlphabetSoup" element={<GameAlphabetSoup />} />
              <Route path="/GameJackpot" element={<GameJackpot />} />
              <Route path="/Login" element={<Login />} />
          </Routes>
      </HashRouter>
    {/* </UserProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// if (window.cordova) {
//   document.addEventListener('deviceready', () => {
//     renderReactDom();
//   }, false);
// } else {
//   renderReactDom();
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
