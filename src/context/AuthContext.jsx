import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [account,setAccount] = useState(null)

    const [formSignUp, setFormSignUp] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        contact_no: ''
    });

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        
    },[])



    return (
        <AuthContext.Provider value={{ formLogin, formSignUp, account,setAccount,setFormLogin,setFormSignUp }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
