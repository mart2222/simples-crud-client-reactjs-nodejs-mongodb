import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Menu, Link,
} from './styles';

const Sidebar = ({ collapsed }) => (
  <Container collapsed={collapsed}>
    <header></header>

    <Menu>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Início
            </Link>
          </li>
          <li>
            <Link to="/clientes">
              Clientes
            </Link>
          </li>
        </ul>
      </nav>
    </Menu>
  </Container>
);

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
