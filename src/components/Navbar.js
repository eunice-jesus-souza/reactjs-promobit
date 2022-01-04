import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToHome } from "../router/routerGps";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: var(--primary);
  min-height: 93vh;
  width: 150px;
  padding: 10px;
  margin: 1px solid silver;

  button {
    margin: 5px;
    width: 100px;
    height: 20px;
  }
`;

export default function Navbar() {
  const history = useHistory();

  return (
    <StyledHeader>
      <button onClick={() => goToHome(history)}>Início</button>
    </StyledHeader>
  );
}
