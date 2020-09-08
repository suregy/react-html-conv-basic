import React from 'react';

import propsType from 'prop-types';

export default function Lists(props) {
  const classname = ['list-reset'];
  classname.push(props.className);
  if (props.isSmall) classname.push('text-xs');
  return (
    <ul className={classname.join(' ')}>
      {props.data.map((list, index) => {
        return (
          <li key={index} className={list.isChecked ? 'is-checked' : ''}>
            {list.content}
          </li>
        );
      })}
    </ul>
  );
}

Lists.propsType = {
  className: propsType.string,
  data: propsType.array,
  isSmall: propsType.bool,
};
