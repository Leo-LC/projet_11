import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logOut } from "../utils/user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCircleUser,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const userToken = useAppSelector((state) => state.user.userToken);
  const dispatch = useAppDispatch();

  const userName = useAppSelector((state) => state.user.userName);

  /*   const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("userToken");
    navigate("/");
  }; */

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
      {/* TODO : en faire un compoennt à part : gestion du signin/out en fonction de usertoken ET de la page sur laquelle on se trouve*/}
      <div className='flex gap-4 text-center items-center text-primary'>
        <span className='main-nav-item user-name'>{userName}</span>
        <FontAwesomeIcon icon={faCircleUser} />
        <FontAwesomeIcon icon={faGear} />
        {userToken ? (
          <Link
            className='main-nav-item'
            to='/'
            onClick={() => {
              dispatch(logOut());
              localStorage.removeItem("userToken");
            }}
          >
            <FontAwesomeIcon
              icon={faPowerOff}
              className='text-primary'
            />
          </Link>
        ) : (
          <Link
            className='main-nav-item'
            to='/sign-in'
          >
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              className='text-primary'
            />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
