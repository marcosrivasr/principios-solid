import React, { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Some logic related to name input
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Some logic related to email input
  };

  const handleSubmit = () => {
    // Some logic for form submission
    // It may involve both name and email data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
