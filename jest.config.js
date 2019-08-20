// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  roots: [
    "src"
  ],
  preset: "ts-jest",
  setupFilesAfterEnv: ["jest-extended"],
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    '!<rootDir>/src/index.ts',
    '!**/jest*config.js',
    '!<rootDir>/**/**test**/**/*',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  modulePathIgnorePatterns: [],
  testEnvironment: 'node',
};
