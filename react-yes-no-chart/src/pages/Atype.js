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

export default function Atype() {
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
          Aタイプ
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          style={{ display: 'flex', alignItems: 'flex-end', padding: '0 0 20px' }}
        >
          もうひとつの台湾４日間
          <Typography
            style={{ fontWeight: '500', padding: '0 0 0 10px' }}
          >
            (台北・新竹・北埔・内湾・基隆・九份)
          </Typography>
        </Typography>
        <img src="./images/atype.png" className="App-logo" alt="logo" style={{ width: '100%' }} />
        <Typography
          variant="h5"
          align="left"
          gutterBottom
          fontWeight="bold"
          style={{ margin: '40px 0 -15px', padding: '0 10px', color: '#5e6b2e' }}
        >
          おすすめポイント
        </Typography>
        <Box style={{ width: '100%', background: '#f2f2f2', padding: '10px', margin: '' }}>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="・ ディープな台湾、6都市をくまなく巡る充実の旅！" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ 台湾の名物料理を含む、全8回の食事付き(5日間は9回)" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ 松山空港からの直行便利用。乗り換えなしで楽々旅行！" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ 台湾のローカル線「内湾線」に乗車。車窓から地元の風景を！" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ 人気スポット九份ではもちもち芋団子づくりに挑戦！" />
            </ListItem>
          </List>
        </Box>
        <Box
          style={{ margin: '30px 0' }}
        >
          <StyledTypography>
            こちらのプランの目玉は、なんといっても九份（きゅうふん）です。台湾でも特に人気の高いスポットで、映画「非情城市」のロケ地になったり、「千と千尋の神隠し」の舞台のモデルと噂になったことで有名になりました。
          </StyledTypography>
          <StyledTypography>
            どこか懐かしさの漂う建物の間をぬって細い階段が続き、赤ちょうちんが両側に並ぶ街並みは、ノスタルジックな雰囲気に包まれています。食べ物屋や土産物屋、喫茶店がたくさんあるので、歩き疲れたら台湾茶を飲んで休憩するのもいいですね。名物の「もちもち芋団子」づくりの体験もできます。
          </StyledTypography>
          <StyledTypography>
            夕方には赤ちょうちんに火が灯り、さらに幻想的な雰囲気の中で郷土料理の夕食をいただきます。
          </StyledTypography>
        </Box>
        <TableContainer>
          <Table style={{ width: '100%', border: 'solid 1px #cccccc' }}>
            <TableHead>
              <TableRow >
                <TableCell style={{ background: '#f2f2f2', width: '25%', fontWeight: 'bold' }}>出発日</TableCell>
                <TableCell>2020年2月20日(木)、3月8日(日)、松山空港出発限定</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ background: '#f2f2f2', width: '25%', fontWeight: 'bold' }}>料金</TableCell>
                <TableCell style={{ padding: '0 16px' }}><p style={{ margin: '16px 0 5px' }}>大人お一人さま(2～3名1室利用)</p><p style={{ margin: '5px 0 16px' }}>82,400円～86,400円</p></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          variant="caption"
          align="left"
          display="block"
          gutterBottom
          style={{ margin: '30px 0' }}>
          ※燃油サーチャージ、海外空港諸税、国際観光旅客税が別途必要となります。
        </Typography>
        <StyledButton size='large' variant="contained" color='primary' component={Link} to="/" style={{ padding: '20px 0' }}>
          診断トップに戻る
        </StyledButton>
      </Container>
    </div>
  )
};