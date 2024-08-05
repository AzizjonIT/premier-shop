import { createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const userRegisterObject = {
    id: 1,
    userName: "azizxon@gmail.com",
    userPass: "7777",
  };

  return (
    <Context.Provider value={{ userRegisterObject }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
