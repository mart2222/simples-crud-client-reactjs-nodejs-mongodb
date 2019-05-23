import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../styles/colors'

export const Container = styled.aside`
  width: 80px;
  background: ${colors.primeira};
  color: #fff;
  z-index: 10;

  @media (max-width: 1100px) {
    position: absolute;
    height: 100vh;
    left: ${({ collapsed }) => (collapsed ? '-80px' : '0')};
    transition: all 0.2s;
  }

  header {
    background: ${colors.segunda};
    padding: 35px 30px;

    @media (max-width: 600px) {
      padding: 20px 10px;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 32px;
      width: 43px;

      @media (max-width: 600px) {
        transform: scale(0.7);
      }
    }
  }
`;

export const Menu = styled.section`
  height: calc(100% - 72px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    margin-top: 20px;

    strong {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 600;
      margin-left: 30px;
    }

    ul {
      li {
        a {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 0;
          justify-content: center;
          color: #8c849b;
          font-size: 14px;
          transition: all 0.1s;
          border: 0;

          svg {
            margin: 0 0 3px;
            color: #8c849b;
          }
        }
      }
    }
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 0;
    justify-content: center;
    transition: all 0.1s;
    border: 0;
    background: #dd5554;

    svg {
      color: #fff;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Link = styled(NavLink).attrs({ activeClassName: 'active' })`
  background-color: ${colors.primeiraClara};
  color: #000 !important;

  &:hover,
  &.active {
    svg {
      color: #fff;
    }

    div > div {
      background-color: #fff;
    }

    /* border-left: 8px solid #7159c1; */
    background-color: ${colors.segunda};
    color: #fff !important;
  }
`;

export const Icon = styled.div`
  margin-bottom: 5px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  div {
    mask: url(${props => props.icon}) no-repeat center;
    background-color: #8c849b;
    width: 100%;
    height: 100%;
  }
`;
