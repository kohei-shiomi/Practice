import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Home from './pages/Home';
import Q1 from './pages/Q1';
import Q2_1 from './pages/Q2_1';
import Q2_2 from './pages/Q2_2';
import Q3_1 from './pages/Q3_1';
import Q3_2 from './pages/Q3_2';
import Q3_3 from './pages/Q3_3';
import Q4_1 from './pages/Q4_1';
import Q4_2 from './pages/Q4_2';
import Atype from './pages/Atype';
import Btype from './pages/Btype';
import Ctype from './pages/Ctype';
import Notfound from './pages/Notfound';

// import Header from './compornent/Header';

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  width: '45%'
}));


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd600',
      contrastText: '#000',
    },
    secondary: {
      main: '#5e6b2e',
      ontrastText: '#fff',
    },
  },
});


function FullWidthLayout() {
  return (
    <div>
      <header></header>
      <main></main>
      <footer></footer>
    </div>
  );
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/q1" element={<Q1 />}></Route>
            <Route path="/q2_1" element={<Q2_1 />}></Route>
            <Route path="/q2_2" element={<Q2_2 />}></Route>
            <Route path="/q3_1" element={<Q3_1 />}></Route>
            <Route path="/q3_2" element={<Q3_2 />}></Route>
            <Route path="/q3_3" element={<Q3_3 />}></Route>
            <Route path="/q4_1" element={<Q4_1 />}></Route>
            <Route path="/q4_2" element={<Q4_2 />}></Route>
            <Route path="/Atype" element={<Atype />}></Route>
            <Route path="/Btype" element={<Btype />}></Route>
            <Route path="/Ctype" element={<Ctype />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}


export default App;