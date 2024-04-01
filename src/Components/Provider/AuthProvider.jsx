import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user crate user or registraition 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // this is login 
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sing out 
    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }
    
    // manage user or observe this account
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('the observing current user', currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])


    const authInfo = {
        user, 
        loading,
        createUser, 
        singInUser,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
  };