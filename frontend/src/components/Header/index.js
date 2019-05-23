import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  MdMenu, MdClose,
} from 'react-icons/md';


import {
  Container
} from './styles';

class Header extends Component {
  static propTypes = {
    header: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    collapsed: PropTypes.bool.isRequired,
  };

  state = {
    dropdownVisible: false,
    user: null,
  };

  render() {
    const MdIcon = this.props.collapsed ? MdMenu : MdClose;

    return (
        <Container>
          <h1>
            <MdIcon size={24} onClick={this.props.toggleCollapsed} />
            {this.props.header.title}
          </h1>
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header,
});

export default connect(mapStateToProps)(withRouter(Header));
