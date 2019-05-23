import styled from "styled-components";
import configColores from "../../../styles/colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  background: ${configColores.fundo};
  color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 1100px) {
    overflow: ${({ collapsed }) => (collapsed ? "auto" : "hidden")};
  }

  ${Container} {
    @media (max-width: 1100px) {
      transition: all 0.2s;
      left: ${({ collapsed }) => (collapsed ? "0" : "80px")};
    }
  }
`;

export const Content = styled.div`
  padding: 30px;
`;

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 20px;
  border-radius: 4px;
  background: #24202d;
  text-align: left;

  a {
    color: #ebebeb;

    &:visited {
      color: #bdbdbd;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  padding: 20px 80px 0 80px;

  div {
    max-width: 1300px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 35px;
`;

export const Description = styled.p`
  color: #8c849b;
  margin-top: 15px;
  line-height: 2;
`;

export const TermsForm = styled.div`
  display: flex;
  color: #5c5767;
  border-top: 2px #1e1b26 solid;
  padding: 20px 80px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1365px) {
      flex-direction: column;

      button {
        margin-bottom: 10px;
        font-size: 16px;
        height: 44px;
      }
    }

    span {
      display: flex;
      align-items: center;
      font-size: 14px;

      @media (max-width: 1100px) {
        display: block;
      }
    }
  }
`;
