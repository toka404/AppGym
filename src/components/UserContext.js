import React from "react";
import { useContext, useState } from "react";

export const UserContext = React.createContext(null);

// export function UserProvider(props) {
//   const emptyUser = { mail: null, nombre: null, apellido: null };
//   const [user, setUser] = useState(emptyUser);

//   const contextValue = {
//     user,
//     setUser,
//   };
//   return (
//     <UserContext.Provider value={contextValue}>
//       {props.children}
//     </UserContext.Provider>
//   );
// }

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
