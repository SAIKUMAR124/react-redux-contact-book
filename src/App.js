import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
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
          <h1>Add</h1>
        </Route>
        <Route exact path="/edit/:id">
          <h1>Edit</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
