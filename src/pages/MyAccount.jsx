import React from "react";
//import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
const MyAccount = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  //if (!currentUser) {
  //  return <Redirect to="/login" />;
  //}
  console.log("USERNAME", currentUser);

  let message =
    <>
      <header className="jumbotron">
        <h1>My Account</h1>
        <h3>
          <strong>There was some issue showing the user data</strong>
        </h3>
      </header>

    </>
  if (currentUser) {
    message = <>
      <header className="jumbotron">
        <h1>My Account</h1>
        <h3>
          <strong>{currentUser.username}</strong> My Account
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.jwt && currentUser.jwt.substring(0, 20)} ...{" "}
        {currentUser.accessToken && currentUser.jwt.substr(currentUser.jwt.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Username:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

    </>
  }

  return (
    < div className="container" >
      {message}
    </div >

  );
};
export default MyAccount;