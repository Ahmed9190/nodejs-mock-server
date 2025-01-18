export default {
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$", // Match test files
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use Babel for .js and .jsx files
    "^.+\\.mjs$": "babel-jest", // Use Babel for .mjs files
  },
  testPathIgnorePatterns: ["/build/", "/node_modules/"], // Ignore specified paths
  moduleFileExtensions: ["js", "jsx", "mjs"], // File extensions Jest recognizes
  testEnvironment: "node", // Use Node.js environment
  verbose: true, // Display individual test results with the test suite hierarchy
};
