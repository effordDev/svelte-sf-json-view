const sampleData = [
     {
          "attributes": {
               "type": "Contact",
               "url": "/services/data/v55.0/sobjects/Contact/0033i00000Q9oRdAAJ"
          },
          "Id": "0033i00000Q9oRdAAJ",
          "Name": "Kelly Slater",
          "Title": "Surfer",
          "Account": {
               "attributes": {
                    "type": "Account",
                    "url": "/services/data/v55.0/sobjects/Account/0013i000004oW4GAAU"
               },
               "Name": "WSL",
               "BillingAddress": {
                    "city": "Flagler Beach",
                    "country": "United States",
                    "geocodeAccuracy": "Block",
                    "latitude": 29.505416,
                    "longitude": -81.139457,
                    "postalCode": "32136",
                    "state": "FL",
                    "street": "2090 north ocean shore blvd"
               }
          },
          "Cases": {
               "totalSize": 2,
               "done": true,
               "records": [
                    {
                         "attributes": {
                              "type": "Case",
                              "url": "/services/data/v55.0/sobjects/Case/5003i00000LJ5svAAD"
                         },
                         "Id": "5003i00000LJ5svAAD",
                         "Type": 'urgent',
                         "Priority": "Medium",
                         "Origin": "Phone",
                         "Status": "New",
                         "Fakeobject": {
                              "totalSize": 1,
                              "done": true,
                              "records": [
                                   {
                                        "attributes": {
                                             "type": "Case",
                                             "url": "/services/data/v55.0/sobjects/Case/5003i00000LJ5svAAD"
                                        },
                                        "Id": "5123456789112345",
                                        "Type": 'type',
                                        "Priority": "meh",
                                        "Origin": "text",
                                        "Status": "ya",
                                   },
                              ],
                         },
                    },
                    {
                         "attributes": {
                              "type": "Case",
                              "url": "/services/data/v55.0/sobjects/Case/5003i00000LJ5swAAD"
                         },
                         "Id": "5003i00000LJ5swAAD",
                         "Type": "Mechanical",
                         "Priority": "Low",
                         "Origin": "Email",
                         "Status": "Working"
                    }
               ]
          }
     }
]
export { sampleData }