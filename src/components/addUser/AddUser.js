import { useState } from "react";
import "./AddUser.css";

import { addUser } from "../../utils";
// Import addUser from our utils folder.

// user and setUser passed as props from the parent userWrapper component
const AddUser = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password);

    await addUser(username, email, password);
  };

  return (
    <div className="adduser-wrapper">
      <form className="add-user-form" onSubmit={onRegisterSubmit}>
        <label>
          Username:
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddUser;
