import { createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const userRegisterObject = {
    email: "john@gmail.com",
    password: "m38rmF$",
  };

  return (
    <Context.Provider value={{ userRegisterObject }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
