import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
  const { children } = props;
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button>{i}</Button>
      ))}
    </p>
  );
}

const element = (
  <div>
    <p>Hello world!</p>
    <p>Hi!</p>
    {<Buttons />}
  </div>
);

ReactDOM.render(element, document.getElementById('app'));
