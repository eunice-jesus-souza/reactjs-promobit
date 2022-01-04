import styled from "styled-components";

export const StyledPageHome = styled.section`
  display: flex;
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  background-color: silver;
  min-width: 100vw;
  /* justify-content: center; */
`;

export const StyledCard = styled.div`
  background-color: var(--detail);
  display: flex;
  flex-direction: column;
  /* min-width: 250px; */
  width: 300px;
  margin: 10px;
  padding: 8px;
  border-radius: 12px;

  p {
    color: var(--primary);
  }
`;
