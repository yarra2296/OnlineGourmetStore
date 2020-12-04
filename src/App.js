import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";

import LogInUser from "./components/login-user";
import RegisterUser from "./components/register-user";
import PurchaseHistory from "./components/purchase-history";
import CartCheckout from "./components/cart-checkout";
import {
  LOGIN,
  REGISTER,
  PURCHASE_HISTORY,
  CART_CHECKOUT,
} from "./components/urls";

function App() {
  return (
    <div>
      <Switch>
        <Route path={LOGIN} exact component={LogInUser} />
        <Route path={REGISTER} exact component={RegisterUser} />
        <Route path={PURCHASE_HISTORY} exact component={PurchaseHistory} />
        <Route path={CART_CHECKOUT} exact component={CartCheckout} />
      </Switch>
    </div>
  );
}

export default App;
