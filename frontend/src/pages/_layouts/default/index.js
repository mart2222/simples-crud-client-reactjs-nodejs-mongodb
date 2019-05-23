import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';

import {
  Wrapper,
  Container,
  Content,
} from './styles';

class Default extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
  };

  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({ collapsed: false }, () => {
      document.addEventListener('click', this.collapseMenuListener);
    });
  };

  collapseMenuListener = () => {
    this.setState({ collapsed: true }, () => {
      document.removeEventListener('click', this.collapseMenuListener);
    });
  };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;

    return (
      <Wrapper collapsed={collapsed}>
        <Sidebar collapsed={collapsed} />
        <Container>
          <Header toggleCollapsed={this.toggleCollapsed} collapsed={collapsed} />
          <Content>
            {
              <Fragment>
                {children}
              </Fragment>
            }
          </Content>
        </Container>
      </Wrapper>
    );
  }
}

export default withRouter(Default);
