# Overview

Feed the Sf-JSON.svelte component an array of any data. In this case we are passing example data from the Salesforce REST api.

[material ui Tab Live Demo](https://svelte.dev/repl/9ca7f1f5481343779e25491e77920b9c?version=3.53.1)
![image](https://user-images.githubusercontent.com/36901822/206382596-1ebf922d-2fd6-4cf4-a12d-563ed2107f70.png)

Example
    
    
```
[ 
    {
        "totalSize": 1,
        "records": [
            {
                "ID": "001AE",
                "RecordType": "Client",
                "Age_Range": "20-24",
                "Consents_to_Email": "Yes",
                "Consents_to_Texts": "Yes",
                "Consents_to_Voicemail": "Yes",
                "Conversation_Preference": "Phone",
                "Education": "Elementary Education or less (5th grade or less)",
                "Ethnicity": "Not Hispanic",
                "Nav_Site": "",
                "Preferred_Communication_Method": "",
                "Preferred_Phone": "",
                "Primary_Language": "English",
                "Race": "White",
                "Type_of_Insurance": "Medicaid-Healthy Blue (Blue Cross Blue Shield)",
                "Gender": "Female",
                "Preferred_Pronouns": "she, her, hers",
                "Marital_Status": "",
                "ProgramId": "a013AAA",
                "IDS_Global_ID__c": "5eWm5ES3jaTjf71vEv3uwQKHu673",
                "rowLoadDate": {
                    "value": "2022-12-06T14:18:45.779000"
                },
                "attributes": {
                    "type": "Account"
                },
                "account_case": {
                    "totalSize": 1,
                    "records": [
                        {
                            "ID": "5003CQAC",
                            "rowLoadDate": {
                                "value": "2022-12-06T14:18:44.434000"
                            },
                            "RecordType": "Prenatal",
                            "Status": "Complete",
                            "Client": "0013C00QAE",
                            "Child": "",
                            "Consent": "a0T3aUAG",
                            "Estimated_Due_Date": {
                                "value": "2022-12-23"
                            },
                            "Estimated_Gestation": "Less than 8 weeks",
                            "Four_Week_Follow_up_Actual_Date": {
                                "value": "2022-12-06"
                            },
                            "Four_Week_Follow_up_Target_Date": {
                                "value": "2023-01-03"
                            },
                            "Guidance_Actual_Date": {
                                "value": "2022-12-06"
                            },
                            "Matrix_Completed_Date": {
                                "value": "2022-12-06"
                            },
                            "Number_of_Children": "1",
                            "Reason_No_Longer_Enrolled_picklist": "",
                            "Touchpoint_Site": "a0f3A4",
                            "Recording_Consent": "",
                            "Actual_Delivery_Date": null,
                            "Pediatrician_s_Office": "",
                            "Delivery_Type": "",
                            "Gestational_Age_Days": null,
                            "Gestational_Age_Weeks": null,
                            "Data_Warehouse_ETL_Last_Modified": null,
                            "ProgramId": "a013t0AA",
                            "Warm_Handoff_Notes__c": "",
                            "attributes": {
                                "type": "Case"
                            },
                            "case_teamMember": {
                                "totalSize": 1,
                                "records": [
                                    {
                                        "ID": "0B63C0000A",
                                        "MemberId": "0054x00AS",
                                        "TeamRoleId": "Prenatal Navigator",
                                        "ParentId": "5003C00QAC",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:19:09.791000"
                                        },
                                        "attributes": {
                                            "type": "CaseTeamMember"
                                        },
                                        "teamMember_user": {
                                            "totalSize": 1,
                                            "records": [
                                                {
                                                    "ID": "0054xMAAS",
                                                    "Title": "",
                                                    "Email": "ryan.stalder+hillary@cc.us",
                                                    "Phone": "",
                                                    "IDS_Global_ID": "uxorWCkU0bBrr1",
                                                    "ProgramId": "a013t00001937dpAAA",
                                                    "FirstName": null,
                                                    "LastName": null,
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:19:09.443000"
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
                                        "ID": "a0P3C0UAG",
                                        "RecordType": "Matrix",
                                        "Touchpoint": "5003CQAC",
                                        "Assessment_Category": "Other",
                                        "Assessment_Completed_On": null,
                                        "Client": "0013C000AE",
                                        "Interaction": "",
                                        "Score": "",
                                        "Subject": "0013CibQAE",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:51.249000"
                                        },
                                        "attributes": {
                                            "type": "nav_Assessment__c"
                                        },
                                        "assessment_matrix": {
                                            "totalSize": 13,
                                            "records": [
                                                {
                                                    "ID": "a0t3C0QAI",
                                                    "Matrix": "a0P3bUAG",
                                                    "Factor": "Child Care Plans",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3QAI",
                                                    "Matrix": "a0P3pbUAG",
                                                    "Factor": "Family and Community Safety",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3fQAI",
                                                    "Matrix": "a0P3bUAG",
                                                    "Factor": "Health Care Plans",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0tQAI",
                                                    "Matrix": "a0P3pbUAG",
                                                    "Factor": "History of Parenting Difficulties",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3hQAI",
                                                    "Matrix": "a0P3bUAG",
                                                    "Factor": "Household Safety/ Material Supports",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3iQAI",
                                                    "Matrix": "a0P3CpbUAG",
                                                    "Factor": "Infant Health and Child Development",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3hKQAI",
                                                    "Matrix": "a0P3pUAG",
                                                    "Factor": "Management of Infant Crying/Child Behavior",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3CKkQAI",
                                                    "Matrix": "a0P3OpbUAG",
                                                    "Factor": "Maternal Health",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3lQAI",
                                                    "Matrix": "a0P3pbUAG",
                                                    "Factor": "Parent-Child Relationship",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3KmQAI",
                                                    "Matrix": "a0P3OpbUAG",
                                                    "Factor": "Parent Emotional Support",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3nQAI",
                                                    "Matrix": "a0P3OpbUAG",
                                                    "Factor": "Substance Use",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3KoQAI",
                                                    "Matrix": "a0PpbUAG",
                                                    "Factor": "Parent Well Being",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0t3QAI",
                                                    "Matrix": "a0PpbUAG",
                                                    "Factor": "Thirteenth Factor",
                                                    "Most_Recent_Rating__c": "",
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:18:47.795000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Matrix_Factor__c"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "ID": "a0PpgUAG",
                                        "RecordType": "Prenatal_Screening",
                                        "Touchpoint": "5003CiQAC",
                                        "Assessment_Category": "Navigation Screening",
                                        "Assessment_Completed_On": {
                                            "value": "2022-12-05"
                                        },
                                        "Client": "0013JibQAE",
                                        "Interaction": "",
                                        "Score": "",
                                        "Subject": "0013ibQAE",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:51.249000"
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
                            "case_interactions": {
                                "totalSize": 1,
                                "records": [
                                    {
                                        "ID": "a0W30UAC",
                                        "RecordType": "Four_Week_Follow_up",
                                        "Client_Distraction_Rating": "3",
                                        "Client_Engagement_Rating": "4",
                                        "Client": "0013ibQAE",
                                        "Has_a_Partner": "",
                                        "Interaction_Completed_By_Person": "Jeff",
                                        "Interaction_Date": {
                                            "value": "2022-12-06"
                                        },
                                        "Interaction_Modality": "Phone",
                                        "Interaction_Number_of_Minutes": "25",
                                        "Interpreter_Used_for_Conversation": false,
                                        "Language_Used": "",
                                        "Marital_Status": "",
                                        "Number_of_Children_Under_3": "",
                                        "Number_of_Children": "",
                                        "Touchpoint_Conducted_By": "",
                                        "Type_of_Interaction": "",
                                        "fwf_Call_Helpful": "Yes",
                                        "fwf_Felt_Supported": "Yes",
                                        "Pediatrician_s_Office": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:53.059000"
                                        },
                                        "Touchpoint__c": "5003iQAC",
                                        "attributes": {
                                            "type": "nav_Interaction__c"
                                        }
                                    }
                                ]
                            },
                            "case_resources": {
                                "totalSize": 5,
                                "records": [
                                    {
                                        "ID": "a0e3C00EQAS",
                                        "RecordType": "Referral",
                                        "Touchpoint": "5003C0iQAC",
                                        "Able_to_Connect_with_Program_Agency": "No",
                                        "Date_of_Referral": {
                                            "value": "2022-12-06"
                                        },
                                        "Form_Submission_Date": null,
                                        "Interaction": "a0W3HMUA0",
                                        "Is_was_a_referral_form_required": "",
                                        "Is_was_there_a_wait_list": "No Wait List",
                                        "Most_Recent_Shared_Date": null,
                                        "Not_Secured_Reason": "",
                                        "Person": "0013CibAE",
                                        "Program": "a0B3Ca7UAM",
                                        "Referral_Source": "Program Staff",
                                        "Referral_Status": "Secured",
                                        "Awaiting_Services_Start_Date": null,
                                        "Date_Completed": null,
                                        "Reporting_Source": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:56.436000"
                                        },
                                        "attributes": {
                                            "type": "nav_Resource__c"
                                        }
                                    },
                                    {
                                        "ID": "a0e3CdoQAS",
                                        "RecordType": "Referral",
                                        "Touchpoint": "5003CtjiQAC",
                                        "Able_to_Connect_with_Program_Agency": "No",
                                        "Date_of_Referral": {
                                            "value": "2022-12-06"
                                        },
                                        "Form_Submission_Date": null,
                                        "Interaction": "a0WUA0",
                                        "Is_was_a_referral_form_required": "",
                                        "Is_was_there_a_wait_list": "No Wait List",
                                        "Most_Recent_Shared_Date": null,
                                        "Not_Secured_Reason": "",
                                        "Person": "0013bQAE",
                                        "Program": "a0B3CgUAE",
                                        "Referral_Source": "Program Staff",
                                        "Referral_Status": "Secured",
                                        "Awaiting_Services_Start_Date": null,
                                        "Date_Completed": null,
                                        "Reporting_Source": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:56.436000"
                                        },
                                        "attributes": {
                                            "type": "nav_Resource__c"
                                        }
                                    },
                                    {
                                        "ID": "a0e3C00QAS",
                                        "RecordType": "Referral",
                                        "Touchpoint": "500iQAC",
                                        "Able_to_Connect_with_Program_Agency": "No",
                                        "Date_of_Referral": {
                                            "value": "2022-12-06"
                                        },
                                        "Form_Submission_Date": null,
                                        "Interaction": "a0W3MUA0",
                                        "Is_was_a_referral_form_required": "",
                                        "Is_was_there_a_wait_list": "No Wait List",
                                        "Most_Recent_Shared_Date": null,
                                        "Not_Secured_Reason": "",
                                        "Person": "0013CQAE",
                                        "Program": "a0BMHfUAM",
                                        "Referral_Source": "Program Staff",
                                        "Referral_Status": "Secured",
                                        "Awaiting_Services_Start_Date": null,
                                        "Date_Completed": null,
                                        "Reporting_Source": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:56.436000"
                                        },
                                        "attributes": {
                                            "type": "nav_Resource__c"
                                        }
                                    },
                                    {
                                        "ID": "a0e3S",
                                        "RecordType": "Referral",
                                        "Touchpoint": "5003QAC",
                                        "Able_to_Connect_with_Program_Agency": "Yes",
                                        "Date_of_Referral": {
                                            "value": "2022-12-06"
                                        },
                                        "Form_Submission_Date": null,
                                        "Interaction": "a0W3UA0",
                                        "Is_was_a_referral_form_required": "",
                                        "Is_was_there_a_wait_list": "No Wait List",
                                        "Most_Recent_Shared_Date": null,
                                        "Not_Secured_Reason": "",
                                        "Person": "001QAE",
                                        "Program": "",
                                        "Referral_Source": "Program Staff",
                                        "Referral_Status": "Secured",
                                        "Awaiting_Services_Start_Date": null,
                                        "Date_Completed": null,
                                        "Reporting_Source": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:56.436000"
                                        },
                                        "attributes": {
                                            "type": "nav_Resource__c"
                                        }
                                    },
                                    {
                                        "ID": "a0e3lQAC",
                                        "RecordType": "Engaged_Program",
                                        "Touchpoint": "5003QAC",
                                        "Able_to_Connect_with_Program_Agency": "",
                                        "Date_of_Referral": null,
                                        "Form_Submission_Date": null,
                                        "Interaction": "",
                                        "Is_was_a_referral_form_required": "",
                                        "Is_was_there_a_wait_list": "No Wait List",
                                        "Most_Recent_Shared_Date": null,
                                        "Not_Secured_Reason": "",
                                        "Person": "0013QAE",
                                        "Program": "a0BNNUA2",
                                        "Referral_Source": "",
                                        "Referral_Status": "No Longer Necessary",
                                        "Awaiting_Services_Start_Date": null,
                                        "Date_Completed": null,
                                        "Reporting_Source": "Client",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:18:56.436000"
                                        },
                                        "attributes": {
                                            "type": "nav_Resource__c"
                                        }
                                    }
                                ]
                            },
                            "case_personNeed": {
                                "totalSize": 4,
                                "records": [
                                    {
                                        "ID": "a0Z3BUAU",
                                        "Touchpoint": "500jiQAC",
                                        "Form_Identified": "Maternal Health - Mental Health",
                                        "Interaction": "a0W3C0MUA0",
                                        "Need_Not_Addressed_Reason": "",
                                        "Need_Status": "Addressed",
                                        "Need": "a0UAG",
                                        "Primary_Factor": "Parent Emotional Support",
                                        "Prioritize_need_for": "",
                                        "Priority": "Regular",
                                        "Person": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:19:06.661000"
                                        },
                                        "attributes": {
                                            "type": "nav_Person_Need__c"
                                        },
                                        "personNeed_needResource": {
                                            "totalSize": 2,
                                            "records": [
                                                {
                                                    "ID": "a0X3C02xByuUAE",
                                                    "Resource": "a0e3C0doEQAS",
                                                    "Person_Need": "a0Z3C0CvBUAU",
                                                    "Primary": true,
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:19:00.037000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Need_Resource__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0XxByvUAE",
                                                    "Resource": "a0e3CoEQAS",
                                                    "Person_Need": "a0CvBUAU",
                                                    "Primary": false,
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:19:00.037000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Need_Resource__c"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "ID": "a0Z3UAU",
                                        "Touchpoint": "5003QAC",
                                        "Form_Identified": "Maternal Health - Mental Health",
                                        "Interaction": "a0WMUA0",
                                        "Need_Not_Addressed_Reason": "",
                                        "Need_Status": "Addressed",
                                        "Need": "a0C3J0EUAW",
                                        "Primary_Factor": "Maternal Health",
                                        "Prioritize_need_for": "",
                                        "Priority": "Regular",
                                        "Person": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:19:06.661000"
                                        },
                                        "attributes": {
                                            "type": "nav_Person_Need__c"
                                        },
                                        "personNeed_needResource": {
                                            "totalSize": 2,
                                            "records": [
                                                {
                                                    "ID": "a0X3Bz4UAE",
                                                    "Resource": "a0e3OQAS",
                                                    "Person_Need": "a0ZCUAU",
                                                    "Primary": true,
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:19:02.114000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Need_Resource__c"
                                                    }
                                                },
                                                {
                                                    "ID": "a0XE",
                                                    "Resource": "a0e3CQAS",
                                                    "Person_Need": "a0Z3CCvCUAU",
                                                    "Primary": false,
                                                    "rowLoadDate": {
                                                        "value": "2022-12-06T14:19:02.114000"
                                                    },
                                                    "attributes": {
                                                        "type": "nav_Need_Resource__c"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "ID": "a0AU",
                                        "Touchpoint": "50C",
                                        "Form_Identified": "Maternal Health - Mental Health",
                                        "Interaction": "aA0",
                                        "Need_Not_Addressed_Reason": "",
                                        "Need_Status": "Addressed",
                                        "Need": "a0C3UAW",
                                        "Primary_Factor": "Parent Well Being",
                                        "Prioritize_need_for": "",
                                        "Priority": "Regular",
                                        "Person": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:19:06.661000"
                                        },
                                        "attributes": {
                                            "type": "nav_Person_Need__c"
                                        },
                                        "personNeed_needResource": {
                                            "ID": "a0X3C00AE",
                                            "Resource": "a0e3CQAS",
                                            "Person_Need": "a0ZAU",
                                            "Primary": true,
                                            "rowLoadDate": {
                                                "value": "2022-12-06T14:19:02.671000"
                                            },
                                            "attributes": {
                                                "type": "nav_Need_Resource__c"
                                            }
                                        }
                                    },
                                    {
                                        "ID": "a0Z3C000002qCvEUAU",
                                        "Touchpoint": "5003CAC",
                                        "Form_Identified": "Maternal Health - Mental Health",
                                        "Interaction": "a0W3CMUA0",
                                        "Need_Not_Addressed_Reason": "",
                                        "Need_Status": "Addressed",
                                        "Need": "a0C3C0UAG",
                                        "Primary_Factor": "",
                                        "Prioritize_need_for": "",
                                        "Priority": "Regular",
                                        "Person": "",
                                        "rowLoadDate": {
                                            "value": "2022-12-06T14:19:06.661000"
                                        },
                                        "attributes": {
                                            "type": "nav_Person_Need__c"
                                        },
                                        "personNeed_needResource": {
                                            "ID": "a0X3C0AE",
                                            "Resource": "a0eQAS",
                                            "Person_Need": "a0AU",
                                            "Primary": false,
                                            "rowLoadDate": {
                                                "value": "2022-12-06T14:19:03.314000"
                                            },
                                            "attributes": {
                                                "type": "nav_Need_Resource__c"
                                            }
                                        }
                                    }
                                ]
                            },
                            "case_touchpointChild": {
                                "totalSize": 0,
                                "records": []
                            },
                            "case_touchpointSite": {
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
