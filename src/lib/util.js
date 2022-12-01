const format = (val) => {

     if (val === null) {
          return ''
     }

     switch (typeof(val)) {
 
       case 'string':
         val = val.charAt(0).toUpperCase() + val.slice(1)
         break
 
       case 'number':
         val = Number(val)
         break
 
       case 'boolean':
         val = '' + val
         val = val.charAt(0).toUpperCase() + val.slice(1)
         break
     }
     return val
}
 
const primitives = [
     'boolean',
     'number',
     'bigint',
     'string',
     null
]

const keysToNotDisplay = [
     'totalSize',
     'done',
     'rowLoadDate',
     'attributes',
     'totalSize'
]

const formatItem = (item) => {
     return Array.isArray(item) ? item : Object.entries(item)
}

const formatArrayToObject = (data) => {

     return (Array.isArray(data) ? data : Object.entries(data)).reduce((a, [k, v]) => {
          
          if (primitives.includes(typeof(v))) {
     
               return {...a, [k]: v}
          }
          return a
     }, {})
}

export { 
     format,
     primitives,
     keysToNotDisplay,
     formatItem,
     formatArrayToObject
}