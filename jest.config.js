module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    "./src/important.js": {
      // lines: 90,
      functions: 90,
      branches: 90,
      // statements: 90,
    },
    "./src/utils/": {
      // lines: 80,
      functions: 80,
      branches: 80,
      // statements: 80,
    },
  },
};
