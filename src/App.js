import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/Shared/Header/Header";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Home from "./component/Home/Home/Home";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import MyOrder from "./component/Shared/Header/Header";
import NotFound from "./component/NotFound/NotFound";
import AddServices from "./component/AddServices/AddServices";
import ManageOrder from "./component/ManageOrder/ManageOrder";
import Booking from "./component/Home/Booking/Booking";
import MyOrders from "./component/MyOrders/MyOrders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
