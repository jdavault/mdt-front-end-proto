import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import { Navigate } from 'react-router-dom';
import { logout } from "../redux/actions/auth";
import { clearMessage } from "../redux/actions/message";
import { history } from "../helpers/history";

const Header = () => {

  const [showSalesRepPage, setShowSalesRepPage] = useState(false);
  const [showAdminPage, setShowAdminPage] = useState(false);
  const { user: currentUser } = useSelector(state => state.auth);
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

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    return <Navigate to="/" />
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Prior Auth
        </Link>
        <div className="navbar-nav mr-auto">
          {currentUser == null && (
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          )}
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
          {currentUser && !showSalesRepPage && !showAdminPage && (
            <li className="nav-item">
              <Link to={"/request"} className="nav-link">
                Request
              </Link>
            </li>
          )}
          {currentUser && !showAdminPage && (
            <li className="nav-item">
              <Link to={"/myaccount"} className="nav-link">
                My Account
                {/*{currentUser.username}*/}
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={logOut}>
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

    </div>
  )
}

export default Header