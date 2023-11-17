import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';


export default function Notfound() {
  return (
    <div>
      <Typography
        variant="h5"
        gutterBottom
        fontWeight="bold"
      >
        Not found
      </Typography>
    </div>
  )
};