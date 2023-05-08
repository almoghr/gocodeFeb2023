import React, { useState } from "react";
import "./UserForm.css";
export const UserForm = () => {
  const [userObject, setUserObject] = useState({});

  const handleFormChange = (name, value) => {
    setUserObject({ ...userObject, [name]: value });
  };
  return (
    <div className="container">
      <input
        name="fullname"
        placeholder="fullname"
        onChange={(event) => {
          handleFormChange(event.target.name, event.target.value);
        }}
      />
      <input
        name="email"
        disabled={!userObject.fullname}
        placeholder="email"
        onChange={(event) => {
          handleFormChange(event.target.name, event.target.value);
        }}
      />
      <input
        name="age"
        placeholder="age"
        onChange={(event) => {
          handleFormChange(event.target.name, event.target.value);
        }}
      />
      <input
        name="occupation"
        placeholder="occupation"
        onChange={(event) => {
          handleFormChange(event.target.name, event.target.value);
        }}
      />
      <input
        name="username"
        placeholder="username"
        onChange={(event) => {
          handleFormChange(event.target.name, event.target.value);
        }}
      />
      <input
        name="password"
        placeholder="password"
        onChange={(event) => {
          handleFormChange(event.target.name, event.target.value);
        }}
      />
      <select onChange={(event) => {handleFormChange("gender", event.target.value);}}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <button onClick={() => {console.log('submitted', userObject)}}>submit</button>
    </div>
  );
};
