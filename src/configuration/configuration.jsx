import { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../firebase';
import '.././App.css';
import Film from './model/film';

export default function Configuration() {
  const [appName] = useState('Reactman');
  const [page] = useState('Configuration');
  const [footer] = useState('This is page footer.');
  const [email, setEmail] = useState('e-miro@atlas.cz');
  const [pass, setPass] = useState('Password1');
  const [authenticated, setAuthenticated] = useState(false);
  const [film, setFilm] = useState('');
  const [desc, setDesc] = useState('');
  const [film2, setFilm2] = useState('');
  const [desc2, setDesc2] = useState('');
  const [filmComp, setFilmComp] = useState('');
  const [films, setFilms] = useState([{ name: 'a' }]);

  const onSubmit = () => {};

  useEffect(() => {
    /* eslint-disable */
    firebase.auth(firebaseApp).signInWithEmailAndPassword(email, pass).then(() => {
      console.log('signInWithEmailAndPassword called!');
      setAuthenticated(true);
      const filmsArray = [];
      const films = firebase.database().ref('films');
      films.child('0').on('value', (snap) => {
        setFilm(snap.val().name);
        setDesc(snap.val().desc);
        const filmTemp = Film(snap.val());
        setFilmComp(filmTemp);
        filmsArray.push(snap.val());
      });
      films.child('1').on('value', (snap) => {
        setFilm2(snap.val().name);
        setDesc2(snap.val().desc);
        filmsArray.push(snap.val());
      });
      setFilms(filmsArray);
      console.log(films);
    }).catch(error => console.log(`ERROR: ${error.code} ${error.message}`));
    /* eslint-enable */
  });

  return (
    <div className="App">
      <div className="cover">
        <h1>Welcome to { page } page</h1>
        <h4>...of {appName} application</h4>
        <span>User authenticated: {authenticated.toString()}</span><br />
        <span>Film: {film}</span><br />
        <span>Desc: {desc}</span><br />
        <span>Film: {film2}</span><br />
        <span>Desc: {desc2}</span><br />

        {filmComp}
        {films[0].name}

        <h4>Login form section</h4>
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
