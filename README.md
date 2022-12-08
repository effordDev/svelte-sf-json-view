# Overview

Feed the Sf-JSON.svelte component an array of any data. In this case we are passing example data from the Salesforce REST api.

[Pure HTML Live Demo](https://svelte.dev/repl/3951ed14c2d94880b9a0e9e56e9d1a22?version=3.53.1)

[Tab Live Demo](https://svelte.dev/repl/9ca7f1f5481343779e25491e77920b9c?version=3.53.1)
![image](https://user-images.githubusercontent.com/36901822/206382596-1ebf922d-2fd6-4cf4-a12d-563ed2107f70.png)

###### Example 
```
[
     {
          "totalSize": 1,
          "records": [
               {
                    "ID": "0013C00AG",
                    "RecordType": "0124x00AAY",
                    "Age_Range": "20-24",
                
                    "rowLoadDate": {
                         "value": "2022-11-29T20:24:08.172000"
                    },
                    "attributes": {
                         "type": "Account"
                    },
                    "account_case": {
                         "totalSize": 1,
                         "records": [
                              {
                                   "ID": "5003CsC",
                                   "rowLoadDate": {
                                        "value": "2022-11-29T20:24:02.463000"
                                   },
                                   "RecordType": "Prenatal",
                                   "Status": "Guided Interaction",
                                   "Data_Warehouse_ETL_Last_Modified": null,
                                   "ProgramId": "a013tAAA",
                                   "Warm_Handoff_Notes__c": "",
                                   "attributes": {
                                        "type": "Case"
                                   },
                                   "case_teamMember": {
                                        "totalSize": 2,
                                        "records": [
                                             {
                                                  "ID": "0B63C0AY",
                                                  "MemberId": "0054xAA",
                                                 
                                                  "rowLoadDate": {
                                                       "value": "2022-11-29T20:24:17.644000"
                                                  },
                                                  "attributes": {
                                                       "type": "CaseTeamMember"
                                                  },
                                                  "teamMember_user": {
                                                       "totalSize": 1,
                                                       "records": [
                                                            {
                                                                 "ID": "0054x0003blAAA",
                                                                 "Title": "",
                                                                 "Email": "test.test@coastalcloud.us",
                                                                 
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:14.678000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "User"
                                                                 }
                                                            }
                                                       ]
                                                  }
                                             },
                                             {
                                                  "ID": "0B63C0I",
                                                  "MemberId": "005AAS",
                                                  "TeamRoleId": "Prenatal Navigator",
                                                  "ParentId": "500QAC",
                                                  "rowLoadDate": {
                                                       "value": "2022-11-29T20:24:17.644000"
                                                  },
                                                  "attributes": {
                                                       "type": "CaseTeamMember"
                                                  },
                                                  "teamMember_user": {
                                                       "totalSize": 1,
                                                       "records": [
                                                            {
																															"ID": "00AAS",
																															"Title": "",
																															"Email": "test@test.org.invalid",
																															"Phone": "",
																															
																															"rowLoadDate": {
																																	 "value": "2022-12-01T00:48:22.502000"
																															},
																															"attributes": {
																																	 "type": "User"
																															}
                                                            }
                                                       ]
                                                  }
                                             }
                                        ]
                                   },
                                   "case_assessment": {
                                        "totalSize": 2,
                                        "records": [
                                             {
                                                  "ID": "a0PAG",
                                                  "RecordType": "Matrix",
                                                  "Touchpoint": "50sQAC",
                                                  
                                                  "Subject": "00137iQAG",
                                                  "rowLoadDate": {
                                                       "value": "2022-11-29T20:24:11.201000"
                                                  },
                                                  "attributes": {
                                                       "type": "nav_Assessment__c"
                                                  },
                                                  "assessment_matrix": {
                                                       "totalSize": 13,
                                                       "records": [
                                                            {
                                                                 "ID": "a0QA2",
                                                                 "Matrix": "a079UAG",
                                                                 "Factor": "Child Care Plans",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0tQA2",
                                                                 "Matrix": "a0P3UAG",
                                                                 "Factor": "Family and Community Safety",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3C0QA2",
                                                                 "Matrix": "a0P39UAG",
                                                                 "Factor": "Health Care Plans",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3CM",
                                                                 "Matrix": "a0P3CUAG",
                                                                 "Factor": "History of Parenting Difficulties",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3C00QAM",
                                                                 "Matrix": "a0P79UAG",
                                                                 "Factor": "Household Safety/ Material Supports",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3QAM",
                                                                 "Matrix": "a0P9UAG",
                                                                 "Factor": "Infant Health and Child Development",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0tjQAM",
                                                                 "Matrix": "a0PUAG",
                                                                 "Factor": "Thirteenth Factor",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3AM",
                                                                 "Matrix": "a0P3C000003YI79UAG",
                                                                 "Factor": "Maternal Health",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3CQAM",
                                                                 "Matrix": "a0P3UAG",
                                                                 "Factor": "Parent-Child Relationship",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3gQAM",
                                                                 "Matrix": "a0P79UAG",
                                                                 "Factor": "Parent Emotional Support",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3IhQAM",
                                                                 "Matrix": "a0P39UAG",
                                                                 "Factor": "Substance Use",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3iQAM",
                                                                 "Matrix": "a079UAG",
                                                                 "Factor": "Parent Well Being",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            },
                                                            {
                                                                 "ID": "a0t3QAM",
                                                                 "Matrix": "a0P39UAG",
                                                                 "Factor": "Management of Infant Crying/Child Behavior",
                                                                 "Most_Recent_Rating__c": "",
                                                                 "rowLoadDate": {
                                                                      "value": "2022-11-29T20:24:09.702000"
                                                                 },
                                                                 "attributes": {
                                                                      "type": "nav_Matrix_Factor__c"
                                                                 }
                                                            }
                                                       ]
                                                  }
                                             },
                                             {
                                                  "ID": "a0P3EUAW",
                                                  "RecordType": "Prenatal_Screening",
                                                  "Touchpoint": "5003C5sQAC",
                                                  "Assessment_Category": "Navigation Screening",
                                                  "Assessment_Completed_On": {
                                                       "value": "2022-11-16"
                                                  },
                                                  "Client": "00137iQAG",
                                                  "Interaction": "",
                                                  "Score": "",
                                                  "Subject": "0013iQAG",
                                                  "rowLoadDate": {
                                                       "value": "2022-11-29T20:24:11.201000"
                                                  },
                                                  "attributes": {
                                                       "type": "nav_Assessment__c"
                                                  },
                                                  "assessment_matrix": {
                                                       "totalSize": 0,
                                                       "records": []
                                                  }
                                             }
                                        ]
                         },
                                        "case_interactions": 
                         {
                                        "totalSize": 0,
                                        "records": []
                          },
                                        "case_resources": 
                    {
                                        "totalSize": 0,
                                        "records": []
                          },
                                        "case_personNeed": 
                    {
                                        "totalSize": 0,
                                        "records": []
                          },
                                        "case_touchpointChild": 
                    {
                                        "totalSize": 0,
                                        "records": []
                          },
                                        "case_touchpointSite": 
                    {
                                        "totalSize": 0,
                                        "records": []
                    }
          }
]
}
     				}
     		]
     }
]
```
###### Result
![image](https://user-images.githubusercontent.com/36901822/204320160-00f06819-4ec9-4634-a929-34b1cf66d390.png)


# Svelte + Vite

<details>

  <summary>Info</summary>

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
</details>
