import React from "react";
import classNames from "classnames";
import "../../styles/Icon.scss";

function Icon(props) {
  const { imgUrl, iconSize, children, iconStyle, onMouseEnter, onMouseLeave } = props;

  const iconClass = classNames("icon", {
    'icon-small': iconSize === 'small',
    'icon-medium': iconSize === 'medium',
    'icon-large': iconSize === 'large',
    'icon-x-large': iconSize === 'x-large',
    'icon-padding': iconStyle === 'padding',
    'icon-marg': iconStyle === 'marg'
  });

  return (
    <img

      src={`${window.location.protocol}//${window.location.hostname}:${window.location.port}/${imgUrl}`}
      className={iconClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      alt='icon'
    >
      {children}
    </img>
  );
}

export default Icon;