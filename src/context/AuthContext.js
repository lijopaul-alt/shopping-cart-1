import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider(props) {
  const user = {
    userName: "lijopaul",
    password: "1999",
  };

  return (
    <AuthContext.Provider value={{ user: user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
