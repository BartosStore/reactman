import 'firebase/auth';
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import './App.css';

export default function Configuration() {
  const [appName] = useState('Reactman');
  const [page] = useState('Configuration');
  const [footer] = useState('This is page footer.');
  const [email] = useState('e-miro@atlas.cz');
  const [pass] = useState('Password1');

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyC5lWGLC9LHPKKPeLcn4c1YA5aNDooXYjc',
      authDomain: 'reactman-67cfc.firebaseapp.com',
      databaseURL: 'https://reactman-67cfc.firebaseio.com',
      projectId: 'reactman-67cfc',
      storageBucket: 'reactman-67cfc.appspot.com',
      messagingSenderId: '760238218858',
      appId: '1:760238218858:web:7ca952317653ade8413413',
      measurementId: 'G-9GXYQXXW16',
    };
    const app = firebase.initializeApp(firebaseConfig);
    /* eslint-disable */
    firebase.auth(app).signInWithEmailAndPassword(email, pass).then(console.log('signInWithEmailAndPassword called!')).catch(error => console.log(`${error.code} ${error.message}`));
    /* eslint-enable */
  });

  return (
    <div className="App">
      <div className="cover">
        <h1>Welcome to { page } page</h1>
        <h4>...of {appName} application</h4>
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
}
