import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromSnapshot;
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });

    return () => {
      unsubscribeFromSnapshot();
      unsubscribe();
    };
  }, []);

  console.log(currentUser);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
