import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import theme from './styles/mui/theme'
import {ThemeProvider} from '@mui/material/styles';
import { Header } from './components/molecules';
import routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <Header /> */}
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          ))}
=       </Switch>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
