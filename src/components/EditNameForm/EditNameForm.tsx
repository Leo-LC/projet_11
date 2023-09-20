import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { editUserName } from "../../utils/user/userSlice";

import EditNameInput from "./EditNameImput";
import EditnameButton from "./EditNameButton";

export const EditNameForm = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const userName = useAppSelector((state) => state.user.userName);
  const firstName = useAppSelector((state) => state.user.firstName);
  const lastName = useAppSelector((state) => state.user.lastName);
  const token = useAppSelector((state) => state.user.userToken);

  const [username, setUsername] = React.useState<string>(userName);
  const dispatch = useAppDispatch();

  const handleFormValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!username) return;
    dispatch(editUserName({ data: username, token: token }));
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* TODO : définir comment toggle le component */}
      <section className='flex flex-col gap-8 items-center'>
        <h2 className='text-4xl '>Edit user info </h2>
        <form className='flex flex-col gap-4'>
          <EditNameInput
            label='User Name : '
            id='username'
            type='text'
            /* placeholder={userName} */
            value={username}
            handleChange={handleChange}
          />
          <EditNameInput
            label='First Name : '
            id='firstName'
            type='text'
            value={firstName}
            disabled={true}
          />
          <EditNameInput
            label='Last Name : '
            id='lastName'
            type='text'
            value={lastName}
            disabled={true}
          />
          <div className='flex sm:flex-row gap-2 flex-col'>
            {/* TODO : turn into button component */}
            <EditnameButton
              text='Save'
              onClick={handleFormValidation}
            />
            <EditnameButton
              text='Cancel'
              onClick={handleCancel}
            />
          </div>
        </form>
      </section>
    </>
  );
};
