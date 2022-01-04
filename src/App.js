import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}
