import React from "react";
import classNames from "classnames";
import "../../styles/Button.scss";

function Button(props) {
  const { btnType, onClickHandler, children } = props;

  const btnClass = classNames("btn", {
    'btn-small': btnType === 'small',
    'btn-medium': btnType === 'medium',
    'btn-nav': btnType === 'nav',
  });

  return (
    <button
      className={btnClass}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default Button;