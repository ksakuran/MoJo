import React from "react";
import classNames from "classnames";
import "../../styles/Button.scss";

function Button(props) {
  const { btnType, onClickHandler, children } = props;

  const btnCLass = classNames("btn", {
    'btn-small': btnType === 'small',
    'btn-medium': btnType === 'medium',
    'btn-nav': btnType === 'nav',
  });

  return (
    <button
      className={btnCLass}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default Button;