import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
    fontWeight:'bold',
    width:'45%'
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration:'none',
    color:'#000',
    variant:'body2'
  }));

export default function Q1() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
      return (
<div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background:'#fff', height:'100px' }}>
        <img src="./images/logo-header.png" className="App-logo" alt="logo" style={{ width:'267px', height:'39px',margin:'30px' }}/>
      </AppBar>
    </Box>

<Card
  sx={{ maxWidth: 500, height: '100%', display: 'flex', flexDirection: 'column', background:'#f2f2f2', padding:'0 10px', margin:'10% auto'}}
>
   
  <CardContent sx={{ flexGrow: 1, display: 'flex' }}>
    <h3 sx={{ display: 'flex' }}>
      <span style={{padding:'5px 10px', background:'#fff', borderRadius:'50%', margin:'0 10px 0 0' }}>Q</span>
      旅行にはよく行く
    </h3>
  </CardContent>
  <CardActions style={{justifyContent:'center',padding:'0 0 25px'}}>
    <StyledButton size='large' variant="contained" color='primary'>YES</StyledButton>
    <StyledButton size='large' variant="contained" color='secondary'>NO</StyledButton>
  </CardActions>
  
</Card>
<Container style={{ maxWidth: '100%', background:'#f5f5f5', padding:'20px 0',position:'absolute', bottom:'0' }}>
<Box component="section" style={{ margin:'auto', maxWidth: 500, display:'flex', justifyContent:'space-between' }}>
<StyledLink onClick={back} to="/navigate(-1)">前の質問に戻る</StyledLink>
<StyledLink to="/">最初からやり直す</StyledLink>

</Box>
</Container>
</div>
      )};