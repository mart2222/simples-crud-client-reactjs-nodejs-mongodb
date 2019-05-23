import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import history from './routes/history';
import GlobalStyle from './styles/global';

import store from './store';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Router history={history}>
            <Routes />
          </Router>
        </Provider>
        <ToastContainer />
      </Fragment>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
