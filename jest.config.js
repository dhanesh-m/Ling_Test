module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  "transformIgnorePatterns": [ "/node_modules/(?!(@react-native|react-native)).*/" ]
  // transformIgnorePatterns: [
  //   'node_modules/(?!(|react-native-vector-icons|react-native-table-component)/)',
  //   'node_modules/@react-native/js-polyfills/error-guard.js',
  // ],
};
