import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyD7qXCKoSviLQrm5hVAm2ixpXAFekfLca8',

  authDomain: 'todoist-tut-e147e.firebaseapp.com',

  projectId: 'todoist-tut-e147e',

  storageBucket: 'todoist-tut-e147e.appspot.com',

  messagingSenderId: '670719366571',

  appId: '1:670719366571:web:144167a7c7f4f25c31eeee',
});

export { firebaseConfig as firebase };
