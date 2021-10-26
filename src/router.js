import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./pages";
import Sidebar from "./component/Sidebar/Sidebar";
import PrivateRoute from "./component/PrivateRoute";
import useUser from "./hooks/useUser";

export default function Router() {
  const [user] = useUser();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <PrivateRoute allowed={user.name !=='guest'} redirect="/login">
          <Sidebar />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
