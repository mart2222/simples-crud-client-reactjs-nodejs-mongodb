import styled from "styled-components";

export const Lives = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  color: #302b3e;
  margin-bottom: 30px;

  @media (max-width: 1631px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1254px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const ContentButton = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const ContentPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul``;

export const Linha = styled.li`
  display: flex;
  line-height: 2;

  @media (max-width: 560px) {
    display: grid;
    border: 1px solid white;
    margin-bottom: 5px;
    padding: 10px;
  }
`;

export const Item = styled.span`
  width: ${props => props.width}px;
`;

export const ItemButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  font-size: 24px;
  color: rgba(255, 255, 255, 0.4);
`;

export const ModalTile = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding-bottom: 20px;
`;
