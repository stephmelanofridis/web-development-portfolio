import React from 'react';
import { Container, Grid } from '@mui/material';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className={'top-60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router >
            <Header />
            <div className='main-content'>
              <Switch>
                <Route path='/about'><About /></Route>
                <Route path='/portfolio'><Portfolio /></Route>
                <Route path='/resume'><Resume /></Route>
                <Route path='/contact'><Contact /></Route>
                <Route path='/'><About /></Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
