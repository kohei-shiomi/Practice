import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StyledButton = styled(Button)(({ theme }) => ({
    fontWeight:'bold',
    width:'300px',
    margin:'20px 0 0'
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration:'none',
    color:'#000',
    fontWeight:'bold',
    variant:'body2'
  }));


export default function Home() {
      return (
<div style={{textAlign:'center', padding:'15% 0 0'}}>
       <Typography
          variant="h5"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          タイプ別おすすめ
        </Typography>
       <Typography
          variant="h3"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          旅行プラン診断
        </Typography>
       <Typography
          align="center"
          gutterBottom
        >
          簡単な質問に答えていくだけで
        </Typography>
       <Typography
          align="center"
          gutterBottom
        >
          あなたにぴったりの旅行先が見つかる！
        </Typography>

<StyledButton size='large' variant="contained" color='primary'>
  <StyledLink to="/Q1" variant="body2">診断スタート</StyledLink>
</StyledButton>
</div>
      )};