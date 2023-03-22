import React from "react";
import classNames from "classnames";
import "../../styles/Button.scss";


function Button(props) {
  const { btnType, onClickHandler, btnId, children } = props;

  const btnClass = classNames("btn", {
    'btn-small': btnType === 'small',
    'btn-medium': btnType === 'medium',
    'btn-nav': btnType === 'nav',
  });

  return (
    <button
      id={btnId}
      className={btnClass}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default Button;