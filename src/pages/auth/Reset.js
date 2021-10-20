import React, { useState } from "react";

const Reset = () => {
  const [email, setEmail] = useState("");
  const handleReset = () => {
    //here will go code for password reset
  };
  return (
    <div>
      <h1>Reset password</h1>
      Email:
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleReset}>Reset password</button>
    </div>
  );
};

export default Reset;
