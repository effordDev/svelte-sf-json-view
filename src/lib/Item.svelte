<script>
  import { loop_guard } from "svelte/internal";
  import { 
    format,
    primitives,
    keysToNotDisplay,
    formatItem
  } from './util'

  export let item = {}
  export let useIndent = false
  export let useFlex = false
  
  let open = false

  const toggleOpen = () => {
		open = !open
	}
</script>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={
  useIndent ? `indent` 
  : useFlex ? `card flex-col`
  : 'card'}
>

  {#each formatItem(item) as [key, value]}
    <!-- <div class="flex-col"> -->
      
      {#if !keysToNotDisplay.includes(key) && primitives.includes(typeof(value))}
          
        {format(key)}:
      
        {format(value)} 

        <br />

      {/if}

      {#if !keysToNotDisplay.includes(key) && typeof(value) == 'object' && !Array.isArray(value)}

        <div class={value?.records?.length && value?.attributes ? "card" : 'indent'}>

          {key}: <br />

          <svelte:self 
            item={value} 
            useIndent={!value?.records?.length}
            useFlex={true}
          />

        </div>

      {/if}

      {#if !keysToNotDisplay.includes(key) && typeof(value) == 'object' && Array.isArray(value)}
        
        <div class="record-container" on:click={toggleOpen}>

          {format(key)}: ({value?.length}) <br />

        </div>
        
        {#if open} 
          
          {#each value as v, i}
          
            <svelte:self item={v}/>
          
          {/each}

        {/if}

      {/if}

    <!-- </div> -->
  
    {/each}

</div>

