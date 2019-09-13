import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/Alert-Context";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition in={alert.visible} timeout={750} classNames={"alert"}>
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong>Внимание</strong>
        {alert.text}
        <button
          onClick={hide}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};
