import React, { useState } from "react";

const TextInput = ({ label, value, onChange }) => (
  <label>
    {label}
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const useFormLogic = (onSubmit) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return { name, email, handleNameChange, handleEmailChange, handleSubmit };
};

const UserForm = () => {
  const { name, email, handleNameChange, handleEmailChange, handleSubmit } =
    useFormLogic((userData) => {
      console.log("Submitting user data:", userData);
    });

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Name:" value={name} onChange={handleNameChange} />
      <TextInput label="Email:" value={email} onChange={handleEmailChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
