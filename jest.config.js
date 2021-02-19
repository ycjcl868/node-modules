module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/?*.(spec|test).(j|t)s?(x)'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/typings/**',
    '!**/types/**',
    '!**/fixtures/**',
    '!**/examples/**',
    '!**/*.d.ts',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/'],
  testEnvironment: 'jest-environment-node',
  testTimeout: process.env.CI ? 30000 : 10000,
  verbose: true,
};
