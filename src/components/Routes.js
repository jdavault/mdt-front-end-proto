import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Login from "./Login";
import Register from "./Register";
import Register2 from "./Register2";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";

import Request from "../pages/Request";
import SalesRep from "../pages/SalesRep";
import Admin from "../pages/Admin";

import { logout } from "../redux/actions/auth";
import { clearMessage } from "../redux/actions/message";
import { history } from "../helpers/history";


const Navigation = () => {
  const [showSalesRepPage, setShowSalesRepPage] = useState(false);
  const [showAdminPage, setShowAdminPage] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  useEffect(() => {
    if (currentUser) {
      setShowSalesRepPage(currentUser.roles.includes("ROLE_SALES_REP"));
      setShowAdminPage(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Prior Auth
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            {showSalesRepPage && (
              <li className="nav-item">
                <Link to={"/salesrep"} className="nav-link">
                  Sales Rep Page
                </Link>
              </li>
            )}
            {showAdminPage && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Page
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/request"} className="nav-link">
                  Request
                </Link>
              </li>
            )}
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/myaccount"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/register2" element={<Register2 />} />
            <Route exact path="/myaccount" element={<MyAccount />} />
            <Route path="/request" element={<Request />} />
            <Route path="/salesrep" element={<SalesRep />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default Navigation