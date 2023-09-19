import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { editUserName } from "../utils/user/userSlice";

export const EditNameForm = () => {
  const [username, setUsername] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const userName = useAppSelector((state) => state.user.userName);

  const dispatch = useAppDispatch();

  const handleFormValidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username) return;
    dispatch(editUserName(username));
    //TODO : Afficher un message de confirmation
  };

  return (
    <>
      <section className='sign-in-content'>
        <h2 className=''>Current Username : {userName} </h2>
        <form onSubmit={handleFormValidation}>
          <div className='input-wrapper'>
            <label htmlFor='username'>New Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={handleChange}
              className='border-2 border-green-400 rounded-md'
            />
          </div>
          <button className='bg-green-400 text-white text-lg font-bold'>
            Confirm Name
          </button>
        </form>
      </section>
    </>
  );
};
