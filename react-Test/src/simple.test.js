function add(x, y) {
  return x + y;
}

test('simple', () => {
  // A가 B여야 한다.
  expect(1 + 1).toBe(2);
});

test('add', () => {
  expect(add(1, 3)).toBe(4);
});

// Signature : 메소드, function에 대한 구별할 수 있는 특징
// name(add), parameters(x, y), return(result)

// TDD Cycle: Red - green - refactoring