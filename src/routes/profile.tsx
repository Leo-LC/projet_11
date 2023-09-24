import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchProfile } from "../utils/userSlice";

// COMPONENTS
import Layout from "../components/Layout/Layout";
import AccountsWrapper from "../components/Accounts/AccountsWrapper";
import EditNameForm from "../components/EditNameForm/EditNameForm";

export default function Profile() {
  const userToken = localStorage.getItem("userToken");
  const userName = useAppSelector((state) => state.user.userName);
  const dispatch = useAppDispatch();

  /*   useEffect(() => {
    // Fetch user data if not already loaded
    if (userToken && !userName) {
      dispatch(fetchProfile(userToken));
    }
  }, []); */

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  document.title = `Argent Bank - Compte de ${userName}`;

  return (
    <Layout handleOpenModal={handleOpenModal}>
      {!userToken ? (
        <h1>Vous devez être connecté pour accéder à cette page</h1>
      ) : (
        <>
          <div className='header'>
            <h1 className='text-black'>
              Welcome back
              <br />
              {userName} !
            </h1>
          </div>
          <EditNameForm
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
          />

          <AccountsWrapper />
        </>
      )}
    </Layout>
  );
}
