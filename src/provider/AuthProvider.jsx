import { createContext } from "react";

export const AuthContext = createContext(null);

const info ={
    name:'o sokina gecos kina'
}
const AuthProvider = ({children}) => {

    return (
       <AuthContext.Provider value={info.name}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;