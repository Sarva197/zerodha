import React from 'react';
import Hero from './Hero';
import Trust from './Trust';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function Homepage() {
  return (
  <>
  <Hero/>
  <Trust heading="Sample" desc="its working"/>
  <Pricing/>
  <Education/>
  <OpenAccount/>
  </>
  );
}

export default Homepage;