import React from "react";
import classNames from "classnames";

function Icon(props) {
  const { imgUrl, iconSize, children } = props;

  const iconClass = classNames("icon", {
    'icon-small': iconSize === 'small',
    'icon-medium': iconSize === 'medium',
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