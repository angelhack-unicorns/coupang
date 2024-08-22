import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDnFYGcvEtmZVcZk71m_cvvin6cUaV-LnU',
  authDomain: 'angelhack-3c8e9.firebaseapp.com',
  projectId: 'angelhack-3c8e9',
  storageBucket: 'angelhack-3c8e9.appspot.com',
  messagingSenderId: '721826371267',
  appId: '1:721826371267:web:673c3eaa446ade07d5b476',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
