import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyC5lWGLC9LHPKKPeLcn4c1YA5aNDooXYjc',
  authDomain: 'reactman-67cfc.firebaseapp.com',
  databaseURL: 'https://reactman-67cfc.firebaseio.com',
  projectId: 'reactman-67cfc',
  storageBucket: 'reactman-67cfc.appspot.com',
  messagingSenderId: '760238218858',
  appId: '1:760238218858:web:7ca952317653ade8413413',
  measurementId: 'G-9GXYQXXW16',
};

const firebaseApp = app.initializeApp(config);

export default firebaseApp;
