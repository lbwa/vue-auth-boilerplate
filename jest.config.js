module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^UTILS/(.*)$': '<rootDir>/src//utils/$1',
    '^STORE/(.*)$': '<rootDir>/src/store/$1',
    '^API$': '<rootDir>/src/api',
    '^STORE$': '<rootDir>/src/store',
    '^ROUTER$': '<rootDir>/src/router',
    '^UTILS$': '<rootDir>/src/utils',
    '^CONFIG$': '<rootDir>/config'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
