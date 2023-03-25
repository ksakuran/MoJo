import React from "react";
import classNames from "classnames";
import "../../styles/Button.scss";


function Button(props) {
  const { btnType, onClickHandler, btnId, children, disabled } = props;

  const btnClass = classNames("btn", {
    'btn-small': btnType === 'small',
    'btn-medium': btnType === 'medium',
    'btn-border': btnType === 'border',
    'btn-nav': btnType === 'nav' && !disabled,
    'btn-disabled': disabled === true,
  });

  return (
    <button
      id={btnId}
      className={btnClass}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;