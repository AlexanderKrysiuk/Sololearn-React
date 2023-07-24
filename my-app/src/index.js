import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
  <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>
}

const arr = ["A","B","C"];
const el = <MyList data={arr} />;

ReactDOM.render(
  el,
  document.getElementById('root')
);