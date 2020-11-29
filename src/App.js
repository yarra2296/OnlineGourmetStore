import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import AddItem from "./components/add-item";
import PaymentSuccess from "./components/payment-success";
import UpdateItem from "./components/update-item";
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
      <div className="App">
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route
                  exact
                  path="/"
                  render={() => {
                    return (<Redirect to="/" />)
                  }}
              />
              <Route path="/addItem">
                <AddItem />
              </Route>
              <Route path="/updateItem">
                <UpdateItem />
              </Route>
              <Route path="/paymentSuccess">
                <PaymentSuccess />
              </Route>
            </Switch>

          </div>
        </Router>
      </div>
  );
}

export default App;
