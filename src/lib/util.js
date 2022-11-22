const format = (val) => {
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
     'string'	
]
const keysToNotDisplay = [
     'totalSize',
     'done',
     'attributes'
]

const formatItem = (item) => {
     return Array.isArray(item) ? item : Object.entries(item)
}

export { 
     format,
     primitives,
     keysToNotDisplay,
     formatItem
}