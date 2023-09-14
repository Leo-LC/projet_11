import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logOut } from "../utils/user/userSlice";

function Navbar() {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const dispatch = useAppDispatch();

  return (
    <nav className='main-nav'>
      <a
        className='main-nav-logo'
        href='/'
      >
        <img
          className='main-nav-logo-image'
          src='/img/argentBankLogo.png'
          alt='Argent Bank Logo'
        />

        <h1 className='sr-only'>Argent Bank</h1>
      </a>
      <div>
        {isAuthenticated ? (
          <Link
            className='main-nav-item'
            to='/'
            onClick={() => dispatch(logOut())}
          >
            <i className='fa fa-sign-out'></i>
            Sign Out
          </Link>
        ) : (
          <Link
            className='main-nav-item'
            to='/sign-in'
          >
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
