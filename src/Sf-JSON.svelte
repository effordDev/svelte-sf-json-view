<script>
  import Item from './lib/Item.svelte'
  import { sampleData } from './dev/dev'

  export let data = /* [] */ sampleData 
  
  console.log(data)
</script>

<main>


  {#each data as rec}

    <div>

      <Item item={rec}/>

    </div>
    
  {/each}
  
</main>

