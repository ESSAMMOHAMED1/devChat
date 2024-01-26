import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("user in auth context ", user);
    });

    return () => {
      unsub();
    };
  }, []);
  const contextValue = {
    currentUser,
    setCurrentUser, // Include setCurrentUser in the context value
  };


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      </AuthContext.Provider>
  );
};
