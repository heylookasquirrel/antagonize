import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import './styles/style.css';

import { Home } from "./components/home"
import { Read } from "./components/read"

ReactDOM.render(
  <Read />,
  document.getElementById('root'));
