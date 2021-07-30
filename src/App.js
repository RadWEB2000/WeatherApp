import React from 'react';
import './main.scss';
import { Location } from './components/Location/Location';
import { Result } from './components/Result/Result';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Location/>
      <Result/>
      <Footer/>
    </>
  );
}

export default App;
