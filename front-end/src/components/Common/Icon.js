import React from "react";
import classNames from "classnames";
import "../../styles/Icon.scss";

function Icon(props) {
  const { imgUrl, iconSize, children } = props;

  const iconClass = classNames("icon", {
    'icon-small': iconSize === 'small',
    'icon-medium': iconSize === 'medium',
    'icon-large': iconSize === 'large',
    'icon-x-large': iconSize === 'x-large',
  });

  return (
    <img
      src={imgUrl}
      className={iconClass}
      alt='icon'
    >
      {children}
    </img>
  );
}

export default Icon;