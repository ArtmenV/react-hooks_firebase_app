import React from "react";
import { FirebaseContext } from "./firebanseContext";

export const FirebaseState = ({ children }) => {
  return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>;
};
