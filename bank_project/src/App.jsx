import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './page/Error';
import SignIn from './page/SignIn';

import { initializeApp } from "firebase/app";

import firebaseKey from "./firebaseKey"
import {getFirestore} from "firebase/firestore"
import { getAuth } from 'firebase/auth';
import {getDatabase} from "firebase/database"
import LoginSuccessPage from './page/LoginSuccessPage';
import Index from './component/LoginPage/Index';
import ChartPage from './component/chart/ChartPage';
const fire = initializeApp(firebaseKey);

export const db = getFirestore(fire)
export const Auth = getAuth(fire)
// export const db = getDatabase(fire)

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' exact element={<Error />} />
      <Route path='/' exact element={<Index /> } />
      <Route path='/SignIn' exact element={<SignIn />} />
      <Route path='/bank' exact element={<LoginSuccessPage />}/>
      <Route path='/chart' exact element={<ChartPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
