import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  width: '300px',
  padding: '15px 0',
  margin: '20px 0 0'
}));


export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '15% 0 0' }}>
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

      <StyledButton size='large' variant="contained" color='primary' component={Link} to="/Q1" style={{ fontSize: '1em' }}>
        診断スタート
        <Icon style={{ position: 'absolute', right: 10, fontSize: 'large', width: '1.2em', height: '1.2em' }}>
          <ArrowCircleRightOutlinedIcon />
        </Icon>
      </StyledButton>
    </div>
  )
};