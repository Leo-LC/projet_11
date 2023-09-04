import React from "react";
import { Link } from "react-router-dom";
import { authentication } from "../utils/authentication";

function Navbar() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src="src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {authentication.isAuthenticated()
          ? <Link className="main-nav-item" to="/" onClick={authentication.signOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
              </Link>
          : <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
        }
       
      </div>
    </nav>
  );
}

export default Navbar;
