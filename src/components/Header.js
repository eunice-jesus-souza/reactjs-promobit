import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLogin, goToHome } from "../router/routerGps";
// import { get_MoviesPopular } from "../api/get_Api"

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--primary);
  min-height: 7vh;
  justify-content: space-around;
  /* margin-bottom: 2px solid var(--white); */
  margin-bottom: 1px solid silver;

  h2 {
    color: var(--segundary);
    cursor: pointer;
  }
`;

export default function Header() {
  const history = useHistory();
  // get_MoviesPopular()
  return (
    <StyledHeader>
      <div>
        <h2 onClick={() => goToHome(history)}>Prompit</h2>
        {/* <button onClick={get_MoviesPopular}>test</button> */}
      </div>
      <div>
        <button onClick={() => goToLogin(history)}>Login</button>
      </div>
    </StyledHeader>
  );
}
