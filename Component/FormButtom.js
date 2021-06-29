import React, { useState } from "react";

const initialButtomState = { comment: "", file: "" };

export const FormButtom = () => {
  const [eachEntry, setEachEntry] = useState(initialButtomState);
  const { comment, file } = eachEntry;
  const handleButtomChange = (e) => {
  
    setEachEntry({ ...eachEntry, [e.currentTarget.name]: e.target.value });
  };

  return (
    <form action="/action_page.php">
      <div class="form-group">
        <label for="phone"></label>
        <input
          type="file"
          class="form-control-file border"
          name="file"
          id="file"
          value={file}
          onChange={handleButtomChange}
        />
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>

        <textarea
          class="form-control"
          rows="5"
          id="comment"
          name="comment"
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={handleButtomChange}
        />
      </div>
    </form>
  );
};
