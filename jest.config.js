module.exports = {
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/config/jest/__mocks__/cssMock.js',
  },
  testMatch: [`**/*/__tests__/**/*.test?(s).[jt]s?(x)`],
  setupFiles: ['<rootDir>/config/jest/polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.js'],
  transform: {
    '^.+\\.(jsx?|tsx?)$': '<rootDir>/config/jest/typescriptTransform.js',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: './tsconfig.test.json',
      babelConfig: {
        plugins: ['require-context-hook'],
      },
    },
  },
  reporters: ['default', 'jest-html-reporters'],
};
