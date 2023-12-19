module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/components/**/*.tsx'],
    testMatch: ['<rootDir>/tests/**/*.test.tsx'],
    modulePaths: ['<rootDir>/components', '<rootDir>/tests'],
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "ts-jest"
    }
  };