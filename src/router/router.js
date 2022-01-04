import { Switch, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageError from "../pages/PageError";
import PageLogin from "../pages/PageLogin";
import PageSignup from "../pages/PageSignup";
import PageDetails from "../pages/PageDetails";
import Navbar from "../components/Navbar";
import { StyledLayout } from "./style";

export default function Router() {
  return (
    <StyledLayout>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path={"/"}>
          <PageHome />
        </Route>

        <Route exact path={"/login"}>
          <PageLogin />
        </Route>

        <Route exact path={"/signup"}>
          <PageSignup />
        </Route>

        <Route exact path={`/details:id`}>
          <PageDetails />
        </Route>

        <Route>
          <PageError />
        </Route>
      </Switch>
    </StyledLayout>
  );
}
