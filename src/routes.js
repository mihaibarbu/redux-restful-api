import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import EventPage from './components/events/EventPage';
import CategoryPage from './components/categories/CategoryPage';
import CategoryForm from './components/categories/CategoryForm';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="event/create" component={requireAuth(EventPage)} />
    <Route path="category" component={requireAuth(CategoryPage)} />
    <Route path="category/create" component={requireAuth(CategoryForm)} />
    <Route path="category/:id" component={requireAuth(CategoryForm)} />
  </Route>
);
