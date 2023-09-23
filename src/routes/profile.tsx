import React from "react";
import { useAppSelector } from "../app/hooks";

// COMPONENTS
import Layout from "../components/Layout/Layout";
import AccountsWrapper from "../components/Accounts/AccountsWrapper";
import EditNameForm from "../components/EditNameForm/EditNameForm";

export default function Profile() {
  const userToken = useAppSelector((state) => state.user.userToken);
  const userName = useAppSelector((state) => state.user.userName);

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
