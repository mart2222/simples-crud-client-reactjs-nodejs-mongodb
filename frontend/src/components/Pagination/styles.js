import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;

  li {
    display: inline-block;
    user-select: none;
    padding: 7px 14px;
    margin: 0 8px;
    font-size: 13px;
  }

  @media (max-width: 560px) {
    li {
      padding: 2px 4px;
      margin: 0 2px;
    }
  }
`;

export const Navigation = styled.li`
  background: ${props => (props.disabled ? '#292530' : props.color)};
  border: 2px solid ${props => (props.disabled ? '#292530' : props.color)};
  border-radius: 8px;
  margin: 0 4px !important;
  color: #000;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transform: ${props => (props.left ? 'rotate(180deg)' : 'rotate(0deg)')};
  padding-top: 10px !important;
  padding-bottom: 10px !important;

  > div {
    mask: url(${props => props.icon}) no-repeat center;
    color: ${props => (props.disabled ? '#929096' : '#000')};
    background-color: ${props => (props.disabled ? '#929096' : '#000')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'inherit')};
    font-size: 11px;

    &::before {
      content: 'btn';
    }
  }
`;

export const Page = styled.li`
  cursor: pointer;
  ${props =>
    props.active &&
    `
    border: 2px solid ${props.color};
    border-radius: 6px;
  `};
`;
