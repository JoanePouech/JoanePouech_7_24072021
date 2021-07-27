import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import ArticleDetail from './pages/ArticleDetail';
import ArticleNew from './pages/ArticleNew';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/auth/signup">
          <SignUp/>
        </Route>
        <Route path="/auth/login">
          <Login/>
        </Route>
        <Route exact path="/articles">
          <MainPage/>
        </Route>
        <Route exact path="/articles/:id(\d+)">
          <ArticleDetail/>
        </Route>
        <Route exact path="/articles/new">
          <ArticleNew/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


