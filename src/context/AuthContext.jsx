// import {createContext, useContext, useEffect, useState} from 'react';

// import {auth, db} from '../firebase'
// import {
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signOut, 
//   onAuthStateChanged
// } from 'firebase/auth'
// import {setDoc, doc} from 'firebase/firestore'

// const AuthContext = createContext();

// export const AuthContextProvider =({children})=>{

//   const [user,setUser] =useState({});

//   const signUp =(email, password)=>{
//     // return createUserWithEmailAndPassword(auth, email, password)
//     createUserWithEmailAndPassword(auth, email, password);
//         setDoc(doc(db, 'users', email), {
//             savedShows: []
//         })
//   }
//   const logIn =(email, password)=>{
//     return signInWithEmailAndPassword(auth, email, password)
//   }

//   const logOut =()=>{
//     return signOut(auth)
//   }

//   useEffect(()=>{
//     const unsubscribe =onAuthStateChanged(auth, (currentUser)=>{
//       setUser(currentUser)

//     })
//     return ()=>{
//       unsubscribe()
//     }
//   })


//     return(
//             <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
//                 {children}
//             </AuthContext.Provider>
//     )
// }




// export function UserAuth  ()  {
//   return useContext(AuthContext)
// }
// good


// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth, db } from '../firebase';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';
// import { setDoc, doc } from 'firebase/firestore';

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const signUp = async (email, password) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       await setDoc(doc(db, 'users', email), {
//         savedShows: []
//       });
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//       // Handle error state or show error to the user
//     }
//   };

//   const logIn = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error('Error logging in:', error.message);
//       // Handle error state or show error to the user
//     }
//   };

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error('Error logging out:', error.message);
//       // Handle error state or show error to the user
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export function useAuth() {
//   return useContext(AuthContext);
// }





// import {createContext, useContext, useEffect, useState} from 'react';
// import { auth, db } from '../firebase';
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged
//     } from 'firebase/auth';
// import {setDoc, doc} from 'firebase/firestore'



// const AuthContext = createContext()

// export function AuthContextProvider({children}){
//     const [user, setUser] = useState({})

//     function signUp(email, password) {
//         createUserWithEmailAndPassword(auth, email, password);
//         setDoc(doc(db, 'users', email), { 
//             savedShows: []
//         }
//       )
//     }// its correct


// //     function signUp(email, password) {
// //       return createUserWithEmailAndPassword(auth, email, password)
// //           .then(userCredential => {
// //               // User signed up
// //               const user = userCredential.user;
// //               return setDoc(doc(db, 'users', user.uid), { 
// //                   savedShows: []
// //               });
// //           })
// //           .catch(error => {
// //               console.error("Error signing up:", error);
// //           });
// //   }
  

//     function login(email, password){
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     function logout(){
//         return signOut(auth)
//     }

//     useEffect(()=>{
//         const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
//             setUser(currentUser);
//         });
//         return () =>{
//             unsubscribe();
//         }
//     })

//     return (
//         <AuthContext.Provider value={{signUp, login, logout, user}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export  function UserAuth(){
//     return useContext(AuthContext)

// }


import {createContext, useContext, useEffect, useState} from 'react';
import { auth, db } from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user, setUser] = useState({})

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{signUp, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}