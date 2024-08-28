module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!node-fetch|other-es-module)',
    '/node_modules/(?!firebase|other-dependencies).+\\.js$',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Adjust this path according to your project's structure
    '^node-fetch$': '<rootDir>/tests/__mocks__/node-fetch.js',
  },
};
