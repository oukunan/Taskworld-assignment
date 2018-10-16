module.exports = {
  collectCoverageFrom: [
    'src/client/components/*.{js,jsx}',
    '!**/node_modules/**'
  ],
  setupTestFrameworkScriptFile: './configs/enzyme',
  testPathIgnorePatterns: ['<rootDir>/(build|config|node_modules)/|src/server/']
};
