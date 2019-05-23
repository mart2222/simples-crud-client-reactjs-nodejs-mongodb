import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderActions from "../../store/ducks/header";

class Dashboard extends Component {
  static propTypes = {
    changeTitle: PropTypes.func.isRequired
  };

  async componentDidMount() {
    this.props.changeTitle("Início");
  }

  render() {
    return <Fragment />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(HeaderActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
