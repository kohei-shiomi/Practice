import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Header from '../compornent/Header';

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  width: '410px',
  margin: '20px 0 0'
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  letterSpacing: '0.11em',
  lineHeight: '2.0',
  fontSize: '0.9em',
  textAlign: 'left'
}));

export default function Ctype() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <Container style={{ maxWidth: 860, padding: '5% 0', align: 'center' }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          あなたにおすすめの旅行プランは•••
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          fontWeight="bold"
          style={{ margin: '40px 0 20px', padding: '10px 10px 8px', background: '#ffd600', width: 150, borderRadius: '10px' }}
        >
          Cタイプ
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          style={{ display: 'flex', alignItems: 'flex-end', padding: '0 0 20px' }}
        >
          まずは窓口へ行ってみましょう！！
        </Typography>
        <img src="./images/ctype.png" className="App-logo" alt="logo" style={{ width: '100%' }} />
        <Typography
          variant="h5"
          align="left"
          gutterBottom
          fontWeight="bold"
          style={{ margin: '40px 0 -15px', padding: '0 10px', color: '#5e6b2e' }}
        >
          おすすめポイント
        </Typography>
        <Box
          style={{ margin: '30px 0' }}
        >
          <StyledTypography>
            旅行の目的や申し込みの方法は人それぞれ。忙しい時でもいつでもどこでも旅行が比較検討できるWebサイトも便利ですが、窓口でのメリットは何と言っても「旅に関するギモンや不安も、その場で何でも相談できる」こと。
          </StyledTypography>
          <StyledTypography>
            「両親に旅をプレゼントしたい！」、「予算に応じたおすすめの旅先が知りたい！」、「家族で海外旅行へ行ってみたい！」、「社員旅行のプラン提案が欲しい！」などなど、行き先や日程がはっきり決まっていなくても、まずは希望を伝えてみましょう。
          </StyledTypography>
          <StyledTypography>
            フジトラベルサービスさんなら、年中無休・夜は20時まで営業。お仕事帰りなどでも気軽に立ち寄ることができます（一部店舗を除く）。
          </StyledTypography>
        </Box>
        <StyledButton size='large' variant="contained" color='primary' component={Link} to="/" style={{ padding: '20px 0' }}>
          診断トップに戻る
        </StyledButton>
      </Container>
    </div>
  )
};