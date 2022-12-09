<script>
  import Item from './lib/Item.svelte'
  // import { sampleData } from './dev/dev'

  export let data = []
  export let labelMap = new Map()
  export let keysToNotDisplay = [
    // 'totalSize',
    // 'done',
    // 'rowLoadDate',
    // 'attributes',
    // 'totalSize'
  ]
  
  data = typeof(data) === 'string' ? JSON.parse(data) : data 
  
</script>

<main> 

  {#each data as rec}
      
    <Item 
      item={rec}
      keysToNotDisplay={keysToNotDisplay}
      labelMap={labelMap}
    />
    
  {/each}
  
</main>

