import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/add">
          <AddContact />
        </Route>
        <Route exact path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
