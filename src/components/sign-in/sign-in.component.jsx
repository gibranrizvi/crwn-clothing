import React, { useState } from 'react';

import './sign-in.styles.scss';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
          required
        />
        <label>Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
