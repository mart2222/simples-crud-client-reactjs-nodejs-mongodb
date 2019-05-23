import styled, { keyframes } from "styled-components";
import configColores from "../../styles/colors";

const colors = {
  cancel: `
    background: #757272;
  `,
  default: `
    background: ${configColores.primeira};
  `,
  danger: `
    background: #DD5554;
  `,
  warning: `
    background: #DDCC54;
  `,
  success: `
    background: #4FCDA5;
  `,
  default2: `
    background: ${configColores.segunda};
  `
};

const sizes = {
  default: `
    padding: 0 20px;
    font-size: 14px;
    height: 36px;
  `,
  small: `
    padding: 0 14px;
    font-size: 13px;
    height: 28px;
  `,
  big: `
    padding: 0 25px;
    font-size: 16px;
    height: 40px;
  `,
  block: `
    font-size: 16px;
    padding: 0 25px;
    align-self: stretch;
    width: 100%;
    justify-content: center;
    height: 46px;
  `
};

export const Container = styled.button`
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  border: 0;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 10px;
  }

  &[disabled] {
    opacity: 0.6;
  }

  ${props => sizes[props.size]};
  ${props => colors[props.color]};
`;

const loadingAnimation = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }

  50% {
    transform: scale(1.0);
  }
}`;

export const Loading = styled.span`
  width: 20px;
  height: 20px;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;

    animation: ${loadingAnimation} 2s infinite ease-in-out;
  }

  &::after {
    animation-delay: -1s;
  }
`;
