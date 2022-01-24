// import react 
import React from 'react';

// this is for storybook to work
import { storiesOf } from '@storybook/react';
import Navbar from '../components/Navbar'


storiesOf('Test')
  .add('Default Navbar', () => <h2>hello world</h2>) 
  .add('Navbar 2', () => <h2>hello </h2>) 
  .add('Navbar 3', () => <h2>hi</h2>)
  
  
storiesOf('Navbar')
  .add('Default Navbar', () => <Navbar/>)
  .add('Navbar with a prop title', () => <Navbar title = "fake LinkedIn App" />)




