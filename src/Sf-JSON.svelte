<script>
  import Item from './lib/Item.svelte'
  import { sampleData } from './dev/dev'

  export let data 
  export let labelMap = new Map()

  let active = ''
  
  labelMap.set('ID', 'Id')
  labelMap.set('account_case', 'Account Case')
  labelMap.set('RecordType', 'Record Type')

  data = typeof(data) === 'string' ? JSON.parse(sampleData) : sampleData 
  console.log(data)
</script>

<main>
  <!-- active: {active} -->

  {#each data as rec}

    <div>

      <Item 
        item={rec}
        topLevel={true} 
        labelMap={labelMap}
        on:tabselect={((event) => {
          active = event.detail.value
          console.log({active})
        })}
      />

    </div>
    
  {/each}
  
</main>

