import { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import * as firebase from 'firebase/app';
import { firebaseApp } from './firebase';
import './App.css';

export default function Configuration() {
  const [appName] = useState('Reactman');
  const [page] = useState('Configuration');
  const [footer] = useState('This is page footer.');
  const [email, setEmail] = useState('e-miro@atlas.cz');
  const [pass, setPass] = useState('Password1');
  const [authenticated, setAuthenticated] = useState(false);

  const onSubmit = () => {};

  useEffect(() => {
    /* eslint-disable */
    firebase.auth(firebaseApp).signInWithEmailAndPassword(email, pass).then(() => {
      console.log('signInWithEmailAndPassword called!');
      setAuthenticated(true);
      firebase.database().ref('film').on('value', (snap) => {
        console.log(snap.val());
      });
    }).catch(error => console.log(`ERROR: ${error.code} ${error.message}`));
    /* eslint-enable */
  });

  return (
    <div className="App">
      <div className="cover">
        <h1>Welcome to { page } page</h1>
        <h4>...of {appName} application</h4>
        {authenticated.toString()}
        <form onSubmit={onSubmit}>
          <input value={email} onChange={setEmail} /><br />
          <input value={pass} onChange={setPass} /><br />
          <input type="submit" value="Login" />
        </form>
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
}
