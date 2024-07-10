// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'








import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import { AuthContextProvider} from './context/AuthContext';
import Home from "./pages/Home";

function App() {

  return (
    <>
    <AuthContextProvider>

     <Navbar/>
    <Routes>
      <Route path='/'  element ={<Home/>}></Route>
    </Routes>

    </AuthContextProvider>
    </>
  )
}

export default App






// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../src/firebase';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const signUp = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const logIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const logOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []); // Empty dependencies array to ensure this effect runs only once

//   return (
//     <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export function useAuth() {
//   return useContext(AuthContext);
// }
