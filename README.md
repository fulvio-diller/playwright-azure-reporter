# Playwright Azure Reporter

## How to integrate

```
npm install @alex_neo/playwright-azure-reporter
```

## Usage

You must register an ID already existing test cases from Azure DevOps before running tests.

> **You need write testCaseId wraped in square brackets at the test name.**

You can define multiple test cases for a single test with next format:

- `[1] Test name` - single test case
- `[1,2,3] Test name` - multiple test cases
- `[16, 17, 18] Test name` - multiple test cases with spaces
- `[1, 2, 3] Test name [4] Test name [5][6] Test name` - with combined format

For example:

```typescript
describe('Test suite', () => {
  test('[1] First Test', () => {
    expect(true).toBe(true);
  });

  test('Correct test [3]', () => {
    expect(true).toBe(true);
  });

  test.skip('Skipped test [4]', () => {
    expect(true).toBe(true);
  });

  test('[6] Failed test', () => {
    expect(true).toBe(false);
  });

  test('[7] Test seven [8] Test eight [9] Test nine', () => {
    expect(true).toBe(true);
  });

  test('[10,11,12] Test ten, eleven, twelve', () => {
    expect(true).toBe(true);
  });

  test('[13, 14, 15] Test thirteen, fourteen, fifteen', () => {
    expect(true).toBe(true);
  });

  test('[16, 17, 18] Test sixteen, seventeen, eighteen [19] Test nineteen', () => {
    expect(true).toBe(true);
  });
});
```

Configure Playwright Azure Reporter with `playwright-azure-reporter` package.

`playwright.config.ts`

```typescript
import { PlaywrightTestConfig } from '@playwright/test';
import azureConfig from './azure.config.json';
import { AzureReporterOptions } from './src/playwright-azure-reporter';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    [
      '@alex_neo/playwright-azure-reporter',
      {
        orgUrl: 'https://dev.azure.com/your-organization-name',
        token: 'AZURE-TOKEN',
        planId: 44,
        projectName: 'SampleSample',
        environment: 'AQA',
        logging: true,
        testRunTitle: 'Playwright Test Run',
        publishTestResultsMode: 'testRun',
        uploadAttachments: true,
        attachmentsType: ['screenshot', 'video', 'trace'],
        testRunConfig: {
          owner: {
            displayName: 'Alex Neo',
          },
          comment: 'Playwright Test Run',
        },
      } as AzureReporterOptions,
    ],
  ],
  use: {
    screenshot: 'only-on-failure',
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
};

export default config;
```

## Configuration

Reporter options (\* - required):

- \*`token` - Azure DevOps token, you can find more information [here](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows)
- \*`orgUrl` - Full url for your organization space. Example: `https://dev.azure.com/your-organization-name`

  > **Note:** some API's (e.g. ProfileApi) can't be hit at the org level, and has to be hit at the deployment level, so url should be structured like https://vssps.dev.azure.com/{yourorgname}

- \*`projectName` - Name of your project (also can be got from run URL). Example: `https://dev.azure.com/alex-neo/SampleProject/` - **SampleProject**
- \*`planId` - Id of test plan. You can find it in test plan URL. Example: `https://dev.azure.com/alex-neo/SampleProject/_testPlans/execute?planId=4&suiteId=6` - **planId=4**
- `environment` - Any string that will be used as environment name. Will be used as prefix for all test runs. Default: `undefined`. Example: `QA`
- `logging` [true/false] - Enabled debug logging from reporter or not. Default: `false`.
- `uploadAttachments` [true/false] - Uploading attachments (screenshot/video) after test ended. Default: `false`.
- `attachmentsType` - List of attachments types that will be uploaded. Default: `['screenshot']`.
- `isDisabled` [true/false] - Disable reporter. Default: `false`.
- `testRunTitle` - Title of test run using to create new test run. Default: `Playwright Test Run`.
- `testRunConfig` - Extra data to pass when Test Run creating. Read [doc](https://learn.microsoft.com/en-us/rest/api/azure/devops/test/runs/create?view=azure-devops-rest-7.1&tabs=HTTP#request-body) from more information. Default: `empty`.
- `publishTestResultsMode` - Mode of publishing test results. Default: `'testResult'`. Available options:
  - `testResult` - Published results of tests, at the end of each test, parallel to test run..
  - `testRun` - Published test results to test run, at the end of test run.
    > **Note:** If you use `testRun` mode and using same test cases in different tests (yes i know it sounds funny), it will be overwritten with last test result.
