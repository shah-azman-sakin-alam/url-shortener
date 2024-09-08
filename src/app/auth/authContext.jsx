"use client";
import { createContext, useState } from 'react';

const AuthContext = createContext({
  TypeOfAuth: '',
  setTypeOfAuth: () => {},
})
const AuthProvider  = ({children}) => {
  const [TypeOfAuth, setTypeOfAuth] = useState('login')

  return (
    <AuthContext.Provider value={{TypeOfAuth, setTypeOfAuth}}>
       {children}
        
    </AuthContext.Provider>
  )
}

export  {AuthProvider, AuthContext} 