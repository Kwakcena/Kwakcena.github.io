module.exports = {
  // 테스트를 할 때 마다 불러올 파일을 정의함.
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup'],
};
