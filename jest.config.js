module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "collectCoverage": true,
  "coverageDirectory": "<rootDir>/tests/unit/coverage",
  "collectCoverageFrom": ["src/**/*.{ts,vue}", "!src/assets/**/*", "!src/*", "!src/router/*", "!src/store/index.ts"]
};
