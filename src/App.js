import "antd/dist/antd.css";
import "./App.css";
import Router from "./router";
import UserProvider from "./context/UserContext"

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
