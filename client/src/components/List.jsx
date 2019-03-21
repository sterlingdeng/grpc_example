import React from 'react';

export const List = props => {
  const listJSX = [];
  props.list.forEach((item, idx) => {
    listJSX.push(<li key={idx}>{item.item}</li>);
  });
  return <div>{listJSX}</div>;
};
