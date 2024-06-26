export default function testResultsByQueryResponseMapping(body) {
  return {
    fields: [''],
    results: body.results.map((_, i) => {
      return {
        id: (100000 + i).toString(),
        configuration: {
          id: '1',
        },
        project: {
          id: '40067afb-7d94-4832-8565-a31e3427ecd3',
        },
        durationInMs: 7787,
        outcome: 'Failed',
        revision: 1,
        state: 'Completed',
        testCase: {
          id: '3',
          name: 'Should page opened',
        },
        testPoint: {
          id: (1 + i).toString(),
        },
        testRun: {
          id: '627',
          name: '',
        },
        lastUpdatedDate: '2023-04-07T08:59:13.010Z',
        priority: 2,
        errorMessage:
          '[3,8] Awaiting for user input: expect(received).toHaveTitle(expected)\n\nExpected pattern: /Getting started/\nReceived string:  &quot;Installation | Playwright&quot;\nCall log:\n  - expect.toHaveTitle with timeout 5000ms\n  - waiting for locator(&#39;:root&#39;)\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  - waiting for locator(&#39;:root&#39;)\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n  -   locator resolved to &lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; data-theme=&quot;light&quot; data-rh=&quot;…&gt;…&lt;/html&gt;\n  -   unexpected value &quot;Installation | Playwright&quot;\n',
        createdDate: '2023-04-07T08:59:13.010Z',
        failureType: 'None',
        testCaseTitle: 'Should page opened',
        testCaseRevision: 3,
        customFields: [],
        testCaseReferenceId: 36418281,
        owner: {
          displayName: 'Alex Neo',
          url: 'https://spsprodweu5.vssps.visualstudio.com/Ad6c695e8-17f3-43da-936c-f9416e2e490d/_apis/Identities/230e55b4-9e71-6a10-a0fa-780a87894418',
          _links: {
            avatar: {
              href: 'https://dev.azure.com/alex-neo/_apis/GraphProfile/MemberAvatars/msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
            },
          },
          id: '230e55b4-9e71-6a10-a0fa-780a87894418',
          uniqueName: 'alex.dev.play@gmail.com',
          imageUrl:
            'https://dev.azure.com/alex-neo/_apis/GraphProfile/MemberAvatars/msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
          descriptor: 'msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
        },
        runBy: {
          displayName: 'Alex Neo',
          url: 'https://spsprodweu5.vssps.visualstudio.com/Ad6c695e8-17f3-43da-936c-f9416e2e490d/_apis/Identities/230e55b4-9e71-6a10-a0fa-780a87894418',
          _links: {
            avatar: {
              href: 'https://dev.azure.com/alex-neo/_apis/GraphProfile/MemberAvatars/msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
            },
          },
          id: '230e55b4-9e71-6a10-a0fa-780a87894418',
          uniqueName: 'alex.dev.play@gmail.com',
          imageUrl:
            'https://dev.azure.com/alex-neo/_apis/GraphProfile/MemberAvatars/msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
          descriptor: 'msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
        },
        lastUpdatedBy: {
          displayName: 'Alex Neo',
          url: 'https://spsprodweu5.vssps.visualstudio.com/Ad6c695e8-17f3-43da-936c-f9416e2e490d/_apis/Identities/230e55b4-9e71-6a10-a0fa-780a87894418',
          _links: {
            avatar: {
              href: 'https://dev.azure.com/alex-neo/_apis/GraphProfile/MemberAvatars/msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
            },
          },
          id: '230e55b4-9e71-6a10-a0fa-780a87894418',
          uniqueName: 'alex.dev.play@gmail.com',
          imageUrl:
            'https://dev.azure.com/alex-neo/_apis/GraphProfile/MemberAvatars/msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
          descriptor: 'msa.MjMwZTU1YjQtOWU3MS03YTEwLWEwZmEtNzgwYTg3ODk0NDE4',
        },
      };
    }),
  };
}

/**
 * body sample:
 * {
    "fields": [
      ""
    ],
    "results": [
      {
        "id": "100000",
        "testRun": {
          "id": "150"
        }
      },
      {
        "id": "100001",
        "testRun": {
          "id": "150"
        }
      },
      {
        "id": "100002",
        "testRun": {
          "id": "150"
        }
      },
      {
        "id": "100003",
        "testRun": {
          "id": "150"
        }
      },
      {
        "id": "100004",
        "testRun": {
          "id": "150"
        }
      }
    ]
  }
 */

/**
 * response sample:
 * {
    "count": 1,
    "value": [
      {
        "id": 100001,
        "project": {},
        "outcome": "Passed",
        "testRun": {
          "id": "150"
        },
        "priority": 0,
        "url": "",
        "lastUpdatedBy": {
          "displayName": null,
          "id": null
        }
      }
    ]
  }
 */
