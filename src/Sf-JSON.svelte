<script>
  import Item from './lib/Item.svelte'
  import { sampleData } from './dev/dev'

  export let data 

  data = typeof(data) === 'string' ? JSON.parse(sampleData) : sampleData 
  
  console.log(data)
</script>

<main>

  {#each data as rec}

    <div>

      <Item 
        item={rec}
        topLevel={true} 
      />

    </div>
    
  {/each}
  
</main>

