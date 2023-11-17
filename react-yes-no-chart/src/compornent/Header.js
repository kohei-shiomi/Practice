import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box, Container } from '@mui/system';



export default function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#fff', height: '100px' }}>
          <img src="./images/logo-header.png" className="App-logo" alt="logo" style={{ width: '267px', height: '39px', margin: '30px' }} />
        </AppBar>
      </Box>
    </div>
  )
};