import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "./pages/forms/login";
import RegisterPage from "./pages/forms/register";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
