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

import Header from '../compornent/Header';
import Footer from '../compornent/Footer';

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  width: '45%',
  margin: '0 2%'
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  variant: 'body2'
}));

export default function Q2_1() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  }
  return (
    <div>
      <Header />

      <Card
        sx={{ maxWidth: 500, height: '100%', display: 'flex', flexDirection: 'column', background: '#f2f2f2', padding: '0 10px', margin: '12% auto' }}
      >

        <CardContent sx={{ flexGrow: 1, display: 'flex' }}>
          <h3 sx={{ display: 'flex' }}>
            <span style={{ padding: '5px 10px', background: '#fff', borderRadius: '50%', margin: '0 10px 0 0' }}>Q</span>
            旅先ではショッピングや観光を楽しみたい
          </h3>
        </CardContent>
        <CardActions style={{ justifyContent: 'center', padding: '0 0 25px' }}>
          <StyledButton size='large' variant="contained" color='primary' component={Link} to="/Q3_1">YES</StyledButton>
          <StyledButton size='large' variant="contained" color='secondary' component={Link} to="/Q3_2">NO</StyledButton>
        </CardActions>

      </Card>
      <Footer />
    </div>
  )
};