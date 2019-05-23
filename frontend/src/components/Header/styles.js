import styled, { css } from 'styled-components';
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  height: 72px;
  background: ${colors.primeira};
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #3b3649;

  h1 {
    font-size: 24px;
    display: flex;
    align-items: center;

    svg {
      @media (min-width: 1100px) {
        display: none;
      }

      margin-right: 10px;
      cursor: pointer;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background: #423e51;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-right: 15px;

  ${props => props.image
    && css`
      span {
        display: none;
      }

      background: url(${props.image});
      background-size: cover;
    `};
`;

export const Dropdown = styled.div`
  cursor: pointer;

  > span {
    font-size: 15px;
    margin-right: 8px;
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export const DropdownContent = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')}
  min-width: 220px;
  cursor: auto;
  border-radius: 7px;
  padding: 15px;
  background: #332f3f;
  position: absolute;
  color: #9b95ab;
  right: 0;
  top: 64px;
  margin-right: 30px;
  z-index: 1;

  > ul > li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    svg, object {
      height: 1em;
      width: 1em;
      margin-right: 10px;
    }

    object {
      padding-top: 4px;
    }

    button {
      font-size: inherit;
      color: inherit;
      background: none;
      border: none;

      &:hover {
        text-decoration: underline;
      }
    }

    a {
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > ul > li:last-child {
    margin-bottom: 0;
  }
`;
