import React from 'react';

import './auth.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInPage = () => {
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <SignIn />
    </div>
  );
};

export default SignInPage;
