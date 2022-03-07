import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../Application.less';

import UserService from "../services/user.service";
const Home = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div>
      <div className="container-home center">
        <img className="my-auto mx-auto m-2 sm-image" alt="mdt logo" src="/images/art-logo-rgb-bl.png" />
      </div>
      <div className="tag-line mx-auto m-2 align-self-center">Engineering the Extraordinary</div>
      <div className="mx-auto m-3 small-text">
        This is a reminder of your agreement that by accessing or using the Portal, you acknowledge that you understand and agree to be bound by the Terms. This includes, but is not limited
        to, your agreement that the Portal constitutes BSC’s proprietary information, which you may not disclose or grant any access to any party that is not authorized. You also certify that
        your access and use of the Portal are solely in connection with a medical procedure that involves the use of BSC medical products. If you do not understand or agree to be bound by
        these Terms, you may not use or access the Portal.
      </div>
      <div className="center">
        <Link to={"/login"}><button className="m-1 p-10 btn btn-primary btn-lg btn-block">Log In</button></Link>
        <Link to={"/register"}><button className="m-1 p-10 btn btn-primary btn-lg btn-block">Register</button></Link>
        <Link to={"/"}><button className="m-1 p-10 btn btn-primary btn-lg btn-block">Customer Support</button></Link>
      </div>
    </div>
  );
};
export default Home;