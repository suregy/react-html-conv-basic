import React from 'react';

import propsType from 'prop-types';

export default function Cards(props) {
  const className = ['tiles-item'];
  className.push(props.className);
  return (
    <div className={className.join(' ')}>
      <div
        className={`tiles-item-inner ${props.hasShadow ? ' has-shadow' : ''} `}
      >
        {props.children}
      </div>
    </div>
  );
}

Cards.propsType = {
  hasShadow: propsType.bool,
  className: propsType.string,
};
