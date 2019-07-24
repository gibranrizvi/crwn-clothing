import React from 'react';

import './auth.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h1>Sign In</h1>
      <SignIn />
    </div>
  );
};

export default AuthPage;
