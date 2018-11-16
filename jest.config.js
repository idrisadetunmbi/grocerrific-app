module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  rootDir: 'src/client',
  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',

  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
};
