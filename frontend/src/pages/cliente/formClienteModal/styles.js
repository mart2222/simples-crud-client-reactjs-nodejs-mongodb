import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  padding-bottom: 5px;

  label {
    width: 150px;
  }

  input {
    width: ${props => props.width}%;
  }
`;

export const Buttons = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;
