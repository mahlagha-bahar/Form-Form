import React, { useState } from "react";
import { FormButtom } from "./FormButtom";
import { FormMiddle } from "./FormMiddle";

const initialTopState = { firstName: "", lastName: "" };
export const FormTop = (props) => {
  const { updateFormBuilderArray } = props;

  const [eachEntry, setEachEntry] = useState(initialTopState);
  const { firstName, lastName } = eachEntry;
  const handleTopChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  const handleTopSubmit = (e) => {
    updateFormBuilderArray(eachEntry);
  };
  return (
    <div class="container">
      <h2>Form-Builder</h2>

      <div class="container-sm border"></div>
      <form action="/action_page.php" class="bg-secondary text-white">
        <div class="form-group">
          <label for="firstName">FirstName:</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Enter firstName"
            name="firstName"
            value={firstName}
            onChange={handleTopChange}
          />
        </div>
        <div class="form-group">
          <label for="lastName">LastName:</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Enter lastName"
            name="lastName"
            value={lastName}
            onChange={handleTopChange}
          />
        </div>
        <FormMiddle />
        <FormButtom />
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <button onClick={handleTopSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
