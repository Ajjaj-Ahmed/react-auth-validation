import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const[loader,setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(false)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false)
                console.log('current user:', currentUser)
            } else {
                console.log('user not found')
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // onAuthStateChanged(auth,currentUser=>{
    //     if(currentUser){
    //         console.log("currently login :", currentUser)
    //         setUser(currentUser)
    //     }else{
    //         console.log('user not sign in')
    //         setUser(null)
    //     }
    // })

    const info = {
        createUser, loginUser, logOut, user,setUser,loader
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;