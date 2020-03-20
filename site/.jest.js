module.exports = {
  setupFiles: [ '<rootDir>/mock/jest/setup.jest.js' ],
  moduleFileExtensions: [ 'js', 'jsx' ],
  testPathIgnorePatterns: [ '/node_modules/' ],
  testRegex: '.*\\.test\\.js',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jepg|png)$': '<rootDir>/mock/jest/fileMock.js',
    '\\.(css|less|scss|pcss)$': '<rootDir>/mock/jest/styleMock.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};