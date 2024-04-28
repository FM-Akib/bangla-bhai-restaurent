import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const axiosPublic = useAxiosPublic()


    const CreateUserEmailPassword = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const SigninWithEmailPassword = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
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
          if(user){
            const userInfo = {email: user.email};
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }
            })
          }
          else{
            localStorage.removeItem('access-token')

          }
        });
        return ()=>{
            return unSubscribe(); 
        }
    },[axiosPublic,auth])





    const authInfo = {
        user,
        loading,
        CreateUserEmailPassword,
        SigninWithEmailPassword,
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