import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    
    const CreateUserEmailPassword = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const SigninWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const SigninWithFacebook = ()=>{
        setLoading(true);
        return signInWithPopup(auth, FacebookProvider)
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        setLoading(false);
        });
        return ()=>{
            return unSubscribe(); 
        }
    },[])





    const authInfo = {
        user,
        loading,
        CreateUserEmailPassword,
        SigninWithGoogle,
        SigninWithFacebook,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;