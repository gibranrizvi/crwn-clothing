import React, { useState } from 'react';

import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      // Clear form
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          onChange={event => setDisplayName(event.target.value)}
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          onChange={event => setConfirmPassword(event.target.value)}
          value={confirmPassword}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
