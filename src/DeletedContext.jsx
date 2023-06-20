import { createContext, useState } from "react";

export const DeletedContext = createContext();
const DeletedContextProvider = ({ children }) => {
  // states
  const [deleted, setDeleted] = useState(false);

  //
  return (
    <DeletedContext.Provider value={{ deleted, setDeleted }}>
      {children}
    </DeletedContext.Provider>
  );
};

export default DeletedContextProvider;
