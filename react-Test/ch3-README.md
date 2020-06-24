# ch.3 Test
- React 에서 테스트 주도 개발을 적용하는 방법에 대해 배웠다.
- 사용법에 우선하는 테스트를 작성한다. 어떻게 쓰는지 결정하는 '사용 설명서'를 만들자.
- 어떤 기능을 구현할 때 순서
  1. 해당 기능에 대한 테스트 코드를 작성한다.
  2. 테스트가 통과할 수 있도록 기능을 구현한다.
  3. Refactoring 과정을 수행한다. (중복 제거 등)
- `discribe - it - context` 구조를 사용하여 테스트 하면 구조화 하여 테스트를 작성할 수 있고 흐름 파악에 유용하다.
- `context`는 jest에서 지원하지 않으니 `jest-plugin` 으로 추가해야 한다.
```bash
npm i -D jest-plugin
```
jest.config.js 파일에는 아래와 같이 추가한다.
```javascript
module.exports = {
  // 테스트를 할 때 마다 불러올 파일을 정의함.
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup'],
};
```
- `npx jest --watchAll --verbose` 명령을 사용하면 `describe-context-it` 구조에 작성한 테스트를 마치 문장 읽듯이 확인할 수 있다.
