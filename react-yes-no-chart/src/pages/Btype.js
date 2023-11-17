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

export default function Btype() {
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
          Bタイプ
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          style={{ display: 'flex', alignItems: 'flex-end', padding: '0 0 20px' }}
        >
          選んで創る旅シリーズ
        </Typography>
        <img src="./images/btype.png" className="App-logo" alt="logo" style={{ width: '100%' }} />
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
              <ListItemText primary="・ JR・飛行機・フェリーと宿泊がセットになっていて、終日フリータイムのプラン。 " />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ 経路や宿泊施設が自由に選べて選択肢も広いところが魅力！ " />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ ビジネス・家族旅行・カップル旅行・女子旅など幅広いニーズに対応。 " />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ 出発の当日まで申し込みOK（Web申し込みは14日前まで）※一部商品を除く " />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="・ グリーン車利用OK（※のぞみ号停車駅からのご利用）" />
            </ListItem>
          </List>
        </Box>
        <Box
          style={{ margin: '30px 0' }}
        >
          <StyledTypography>
            こちらのプランの魅力は、なんといっても1都3県にわたる101軒ものホテルの中から、お好きな宿泊地を選べるということ。ディズニーランド、横浜のレンガ館、さいたまスーパーアリーナ、マザー牧場…などなど、行きたい場所に合わせてフレキシブルに旅程を組めるのは嬉しいですね。
          </StyledTypography>
          <StyledTypography>
            また、朝食付プランがあったり、飛び泊ができたり、交通機関とセットではない宿泊のみのプランがあったりと、オリジナルなプランを組み立てることができます。
          </StyledTypography>
          <StyledTypography>
            1名から申し込みが可能ですし、のぞみ号なら山陽各駅から都心まで直結。グリーン車を利用することもできます。 さらに、山陽発着の駅に限り、駅の駐車場が3日間無料になることも。当日まで予約ができるので、思い立ったときにふらっと旅に出られます。気まぐれなあなたにも、行動派のあなたにもぴったりですね。
          </StyledTypography>
        </Box>
        <TableContainer>
          <Table style={{ width: '100%', border: 'solid 1px #cccccc' }}>
            <TableHead>
              <TableRow >
                <TableCell style={{ background: '#f2f2f2', width: '25%', fontWeight: 'bold' }}>出発日</TableCell>
                <TableCell>2019年10月1日(火)～2020年3月31日(火)宿泊</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ background: '#f2f2f2', width: '25%', fontWeight: 'bold' }}>料金</TableCell>
                <TableCell style={{ padding: '0 16px' }}><p style={{ margin: '16px 0 5px' }}>大人お一人さま／スタンダードツイン4名1室</p><p style={{ margin: '5px 0 16px' }}>30,000円～46,300円</p></TableCell>
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