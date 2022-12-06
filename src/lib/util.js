const format = (labelMap, val) => {
     
     if (val === null) {
          return ''
     }

     switch (typeof(val)) {
 
          case 'string':
               val = labelMap.get(val) ? labelMap.get(val) : val 
               val = val.charAt(0).toUpperCase() + val.slice(1)
               val = val.replaceAll('__c', '')
               val = val.replaceAll('_', ' ')
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

const formatItem = (item) => {
     if (!item) { return []}
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
     formatItem,
     formatArrayToObject
}