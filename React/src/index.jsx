import React from 'react';
import ReactDOM from 'react-dom';

function Button({ children }) {
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

function App() {
  return (
    <div>
      <p>Hello world!</p>
      <p>Hi!</p>
      <Buttons />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
