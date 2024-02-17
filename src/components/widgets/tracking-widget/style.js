import styled from "styled-components";

export const WidgetContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  /* width: 30%;
  margin-bottom: 20px; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
export const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;
export const ListItem = styled.li`
  margin-bottom: 5px;
`;