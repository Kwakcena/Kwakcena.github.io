import React from 'react';
import ReactDOM from 'react-dom';

function Button(value) {
  return (
    <button type="button">
      {value}
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        Button(i)
      ))}
    </p>
  );
}

const element = (
  <div>
    <p>Hello world!</p>
    <p>Hi!</p>
    {renderButtons()}
  </div>
);

ReactDOM.render(element, document.getElementById('app'));
