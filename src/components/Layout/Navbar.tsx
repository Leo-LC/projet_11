import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { logOut } from "../../utils/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCircleUser,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  handleOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleOpenModal }) => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const userName = useAppSelector((state) => state.user.userName);
  const userId = useAppSelector((state) => state.user.id);

  return (
    <nav className='main-nav'>
      <Link
        className='main-nav-logo'
        to='/'
      >
        <img
          className='main-nav-logo-image'
          src='/img/argentBankLogo.png'
          alt='Argent Bank Logo'
        />

        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div className='flex gap-4 text-center items-center text-primary'>
        <button
          className='main-nav-item user-name bg-transparent'
          onClick={handleOpenModal}
        >
          {userName}
        </button>

        <Link
          to={isLoggedIn ? `/profile/${userId}` : "/sign-in"}
          className='main-nav-item'
        >
          <FontAwesomeIcon
            className='text-primary'
            icon={faCircleUser}
          />
        </Link>
        <FontAwesomeIcon icon={faGear} />
        {isLoggedIn ? (
          <Link
            className='main-nav-item'
            to='/'
            onClick={() => {
              localStorage.removeItem("userToken");
              dispatch(logOut());
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
};

export default Navbar;
