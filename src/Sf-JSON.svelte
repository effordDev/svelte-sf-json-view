<script>
  import Item from './lib/Item.svelte'
  import { sampleData } from './dev/dev'

  export let data 
  export let labelMap = new Map()

  labelMap.set('ID', 'Id')
  labelMap.set('account_case', 'Account Case')
  labelMap.set('RecordType', 'Record Type')

  data = typeof(data) === 'string' ? JSON.parse(sampleData) : sampleData 
  
  console.log(data)
</script>

<main>

  {#each data as rec}

    <div>

      <Item 
        item={rec}
        topLevel={true} 
        labelMap={labelMap}
      />

    </div>
    
  {/each}
  
</main>

