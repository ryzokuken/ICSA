import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Container from './container.js'

import App from './components/App';
import Agriculture from './components/Agriculture'
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Container}>
    	<IndexRoute component={App} />
    	<Route path="agriculture" component={Agriculture} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;