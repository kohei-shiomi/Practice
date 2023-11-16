import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import Home from './pages/Home';
import Q1 from './pages/Q1';

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight:'bold',
  width:'45%'
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

// function Home() {
//   return (
    
//     <div>
//       <button>
//         <Link to="/Q1">診断スタート</Link>
//       </button>
//       <Card
//         sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', margin:'auto', background:'#f2f2f2', padding:'0 10px' }}
//       >
         
//         <CardContent sx={{ flexGrow: 1, display: 'flex' }}>
//           <h3 sx={{ display: 'flex' }}>
//             <span style={{padding:'5px 10px', background:'#fff', borderRadius:'50%', margin:'0 10px 0 0' }}>Q</span>
//             旅行にはよく行く
//           </h3>
//         </CardContent>
//         <CardActions style={{justifyContent:'center',padding:'0 0 25px'}}>
//           <StyledButton size='large' variant="contained" color='primary'>YES</StyledButton>
//           <StyledButton size='large' variant="contained" color='secondary'>NO</StyledButton>
//         </CardActions>
        
//       </Card>
//     </div>
   
//   );
// }

// function Q1() {
//   return (
//     <div>
//       <div>
//         <h2>Q a</h2>
//       </div>
//       <Link to="/q2_1">Yes </Link> | <Link to="/q2_2">No </Link>
//       <div>
//         <Link to="/">Home</Link>
//       </div>
//     </div>
//   );
// }

function Q2_1() {
  return (
    <div>
      <div>
        <h2>Q 2-1</h2>
      </div>
      <Link to="/q3_1">Yes </Link> | <Link to="/q3_2">No </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Q2_2() {
  return (
    <div>
      <div>
        <h2>Q 2-2</h2>
      </div>
      <Link to="/q3_3">Yes </Link> | <Link to="/q3_2">No </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Q3_1() {
  return (
    <div>
      <div>
        <h2>Q 3-1</h2>
      </div>
      <Link to="/a_type">Yes </Link> | <Link to="/q4_1">No </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Q3_2() {
  return (
    <div>
      <div>
        <h2>Q 3-2</h2>
      </div>
      <Link to="/q4_1">Yes </Link> | <Link to="/q4_2">No </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Q3_3() {
  return (
    <div>
      <div>
        <h2>Q 3-3</h2>
      </div>
      <Link to="/q4-2">Yes </Link> | <Link to="/q3_2">No </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Q4_1() {
  return (
    <div>
      <div>
        <h2>Q 4-1</h2>
      </div>
      <Link to="/b_type">Yes </Link> | <Link to="/c_type">No </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Q4_2() {
  return (
    <div>
      <div>
        <h2>Q 4-2</h2>
      </div>
      <Link to="/c_type">Yes </Link> | <Link to="/q4_1">No </Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function A_type() {
  return (
    <div>
      <div>
        <h2>A_type</h2>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function B_type() {
  return (
    <div>
      <div>
        <h2>B_type</h2>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function C_type() {
  return (
    <div>
      <div>
        <h2>C_type</h2>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

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
          <Route path="/a_type" element={<A_type />}></Route>
          <Route path="/b_type" element={<B_type />}></Route>
          <Route path="/c_type" element={<C_type />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     </ThemeProvider>
  );
}


export default App;