import React, { useState } from "react";

const initialMiddleState = { address: "", phone: "", email: "", password: "" };

export const FormMiddle = () => {
  const [eachEntry, setEachEntry] = useState(initialMiddleState);
  const { address, phone, email, password } = eachEntry;
  const handleMiddleChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  return (
    <form action="/action_page.php">
      <label for="address">Address:</label>

      <input
        type="text"
        class="form-control"
        id="address"
        placeholder="Enter address"
        name="address"
        value={address}
        onChange={handleMiddleChange}
      />
      <label for="email">Email:</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Enter phone"
        name="email"
        value={email}
        onChange={handleMiddleChange}
      />
      <label for="pwd">Password:</label>
      <input
        type="password"
        class="form-control"
        id="pwd"
        placeholder="Enter password"
        name="password"
        value={password}
        onChange={handleMiddleChange}
      />
    </form>
  );
};
