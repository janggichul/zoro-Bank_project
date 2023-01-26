import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './page/Error';
import Main from './page/main';
import SignIn from './page/SignIn';
import Test from './page/Test';

import { initializeApp } from "firebase/app";

import firebaseKey from "./firebaseKey"
import {getFirestore} from "firebase/firestore"
import { getAuth } from 'firebase/auth';
import LoginSuccessPage from './page/LoginSuccessPage';
const fire = initializeApp(firebaseKey);

export const db = getFirestore(fire)
export const Auth = getAuth(fire)

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' exact element={<Error />} />
      <Route path='/' exact element={<Main /> } />
      <Route path='/SignIn' exact element={<SignIn />} />
      <Route path='/bank' exact element={<LoginSuccessPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
