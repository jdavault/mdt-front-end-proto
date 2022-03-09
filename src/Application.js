import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import Register2 from "../src/components/Register2";
import Home from "../src/pages/Home";
import MyAccount from "../src/pages/MyAccount";
import Request from "../src/pages/Request";
import SalesRep from "../src/pages/SalesRep";
import Admin from "../src/pages/Admin";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { history } from "../src/helpers/history";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Application.less";

const Application = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <div className="form-container mt-3">
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
      <Footer />
    </div>

  )
};

export default Application;
