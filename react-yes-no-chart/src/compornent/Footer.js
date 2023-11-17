import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Box, Container } from '@mui/system';


const StyledLink = styled(Link)(({ theme }) => ({
      textDecoration: 'none',
      color: '#000',
      variant: 'body2'
}));

export default function Footer() {
      const navigate = useNavigate();
      const back = () => {
            navigate(-1)
      }
      return (
            <div>
                  <Container style={{ maxWidth: '100%', background: '#f5f5f5', padding: '20px 0', position: 'fixed', bottom: '0' }}>
                        <Box component="section" style={{ margin: 'auto', maxWidth: 500, display: 'flex', justifyContent: 'space-between' }}>
                              <StyledLink onClick={back} to="/navigate(-1)">前の質問に戻る</StyledLink>
                              <StyledLink to="/">最初からやり直す</StyledLink>

                        </Box>
                  </Container>
            </div>
      )
};