import React from 'react';
import{BrowserRouter,  Route, Switch } from 'react-router-dom';
import './App.css';
import FormComponent from './components/form/signUp';
import { ThemeProvider } from '@material-ui/core/styles';
import  theme  from './config/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
<BrowserRouter>
<Switch>
        <Route exact path="/" component={FormComponent} />
      </Switch>
      </BrowserRouter>
      </ThemeProvider>
  );
}