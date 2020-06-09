import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

function handleClick() {
  console.log('click!');
  count += 1;
  console.log(count);
  render();
}

function Counter() {
  return (
    <button type="button" onClick={handleClick}>
      Click me!
      (
      { count }
      )
    </button>
  );
}

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
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  );
}

function App() {
  return (
    <div>
      <p>Hello world!</p>
      <p>Hi!</p>
      <Counter />
      <Buttons />
    </div>
  );
}

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
}

render();