import React, { useContext } from "react";
import { AlertContext } from "../context/alert/Alert-Context";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>HВнимание</strong>
      {alert.text}
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
