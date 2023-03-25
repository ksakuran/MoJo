import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "../../styles/Icon.scss";

function Icon(props) {
  const { imgUrl, iconSize, children, iconStyle, isLocal } = props;

  // console.log("imgUrl: ", imgUrl);
  // const [imageUrl, setImageUrl] = useState(imgUrl);
  const iconClass = classNames("icon", {
    'icon-small': iconSize === 'small',
    'icon-medium': iconSize === 'medium',
    'icon-large': iconSize === 'large',
    'icon-x-large': iconSize === 'x-large',
    'icon-padding': iconStyle === 'padding',
    'icon-marg': iconStyle === 'marg'
  });
  // useEffect(() => {
  //   if (isLocal) {
  //     console.log("isLocal: ", isLocal);
  //     setImageUrl(`http://localhost:3000/${imgUrl}`);
  //   }
  // }, [isLocal]);


  // console.log("imageUrl: ", imageUrl);

  return (
    <img

      src={`http://localhost:3000/${imgUrl}`}
      className={iconClass}
      alt='icon'
    >
      {children}
    </img>
  );
}

export default Icon;