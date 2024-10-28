import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../src/Types/Types";

interface MyContextType {
  showProfileModal: boolean;
  setShowProfileModal: (value: boolean) => void;
  profileDetails: any;
  setProfileDetails: (value: any) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [profileDetails, setProfileDetails] = useState<User[]>();

  return (
    <MyContext.Provider
      value={{
        showProfileModal,
        setShowProfileModal,
        profileDetails,
        setProfileDetails,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider, useMyContext };
