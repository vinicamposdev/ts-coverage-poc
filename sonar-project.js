const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.inclusions': '**',
      'sonar.test.inclusions': '**/*.spec.js,**/*.spec.jsx,**/*.test.js,**/*.test.jsx,**/*.test.ts,**/*.spec.ts,**/*.spec.tsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml',
      'sonar.host.url': 'http://localhost:9000',
      "sonar.login": "admin",
      "sonar.password": "sonar",
    }
  },
  () => {}
);
