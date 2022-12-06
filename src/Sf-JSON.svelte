<script>
  import Item from './lib/Item.svelte'
  import { sampleData } from './dev/dev'

  export let data 
  export let labelMap = new Map()
  export let keysToNotDisplay = [
    'totalSize',
    'done',
    'rowLoadDate',
    'attributes',
    'totalSize'
  ]

  labelMap.set('ID', 'Id')
  labelMap.set('account_case', 'Account Case')
  labelMap.set('RecordType', 'Record Type')

  data = typeof(data) === 'string' ? JSON.parse(sampleData) : sampleData 
  
</script>

<main>

  {#each data as rec}

    <div>

      <Item 
        item={rec}
        keysToNotDisplay={keysToNotDisplay}
        labelMap={labelMap}
      />

    </div>
    
  {/each}
  
</main>

