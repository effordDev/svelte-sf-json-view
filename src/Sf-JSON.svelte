<script>
  import Item from './lib/Item.svelte'
  import { data } from './dev/dev'

  console.log(data)
</script>

<main>


  {#each data as rec}

    <div>

      <Item item={rec}/>

    </div>
    
  {/each}
  
</main>


<style>
  
</style>
