import React from "react";
import { AlertContext } from "./Alert-Context";

export const AlertState = ({ children }) => {
  return <AlertContext.Provider>{children}</AlertContext.Provider>;
};
