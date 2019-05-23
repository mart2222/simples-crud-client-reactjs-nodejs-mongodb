import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Seta from '../../assets/images/icons/Seta.svg';
import Seta2 from '../../assets/images/icons/Seta2.svg';

import { Container, Navigation, Page } from './styles';

class Pagination extends Component {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number.isRequired,
  };

  state = {
    page: 1,
  };

  componentDidMount() {
    this.setState({ page: this.props.activePage });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activePage !== this.props.activePage) {
      this.changePage(this.props.activePage, false);
    }
  }

  handlePrev = () => {
    const { page } = this.state;

    if (page === 1) return;

    const newPage = page - 1;

    this.changePage(newPage);
  };

  handleNext = () => {
    const { page } = this.state;
    const { pageCount } = this.props;

    if (page === pageCount) return;

    const newPage = page + 1;

    this.changePage(newPage);
  };

  changePage = (newPage, callParentChange = true) => {
    this.setState({ page: newPage });

    if (callParentChange) this.props.onChange(newPage);
  };

  renderNavigation = (color, isLeft, disabled) => {
    const { pageCount } = this.props;
    const res = [];
    const icons = [isLeft ? Seta : Seta2, isLeft ? Seta2 : Seta];
    const clicks = [
      isLeft ? () => this.changePage(1) : () => this.handleNext(),
      isLeft ? () => this.handlePrev() : () => this.changePage(pageCount),
    ];

    for (let i = 0; i < 2; i += 1) {
      const element = (
        <Navigation
          onClick={clicks[i]}
          color={color}
          disabled={disabled}
          left={isLeft}
          icon={icons[i]}
          key={i}
        >
          <div />
        </Navigation>
      );

      res.push(element);
    }

    return res;
  };

  renderPages = () => {
    const { pageCount, color } = this.props;
    const { page } = this.state;
    const left = this.state.page - 5;
    const right = this.state.page + 6;
    const pages = Array.from({ length: pageCount }, (v, k) => k + 1).filter(i => i === pageCount || (i >= left && i < right));
    const leftControls = page === 1;
    const rightControls = page === pageCount;
    const res = [];

    if (pageCount <= 1) return res;

    const leftComponent = this.renderNavigation(color, true, leftControls);
    const rightComponent = this.renderNavigation(color, false, rightControls);

    res.push(leftComponent);

    res.push(pages.map((actualPage) => {
      const active = this.state.page === actualPage;
      const pageComponent = (
        <Page
          onClick={() => this.changePage(actualPage)}
          color={color}
          active={active}
          disabled={!!active}
          key={actualPage}
        >
          {actualPage}
        </Page>
      );

      return pageComponent;
    }));

    res.push(rightComponent);

    return res;
  };

  render() {
    return (
      <Container>
        <ul>{this.renderPages()}</ul>
      </Container>
    );
  }
}

export default Pagination;
