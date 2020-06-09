import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Counter({ count, onClick }) {
  // 상태를 변화시키고 정의하는 내용이 상태를 보여주는 선언적인 Counter 컴포넌트 안에 다 들어있어 문제다.
  // 이를 위해 Counter는 count와 onClick 함수를 props로 받는다.
  // 이로써 화면에 그려주는 내용만 갖고 있는 컴포넌트를 완성할 수 있다.
  return (
    <button type="button" onClick={onClick}>
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

// count나 onClick이 어떻게 처리되는지는 Page 컴포넌트는 모른다.
function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello world!</p>
      <p>Hi!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons />
    </div>
  );
}

// App 입장에서는 count 가 변하는 상태에 관심을 갖는다.
function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
