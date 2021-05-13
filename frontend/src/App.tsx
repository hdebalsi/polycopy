import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { light, dark, Menu, FallingBunnies, Spinner, Text } from '@pancakeswap-libs/uikit'


function App() {
  return (
    <ThemeProvider theme={dark}>
      <FallingBunnies>
      </FallingBunnies>
      <Spinner>
      </Spinner>
      <Text color='black'> hi there</Text>
    </ThemeProvider>
  );
}

export default App;
