<script>
  import { loop_guard } from "svelte/internal";
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import { createEventDispatcher } from 'svelte';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';
  import { 
    format,
    primitives,
    keysToNotDisplay,
    formatItem,
    formatArrayToObject
  } from './util'

  export let item = {}
  export let useTab = false
  let active = ''
  let prevActive = ''
  // let open = false

  // const toggleOpen = () => {
	// 	open = !open
	// }

  
  let tabs = [] 
  formatItem(item).forEach(el => {
    if (!primitives.includes(typeof(el[1]))) {
      console.log('her4e3')
      console.log(el)
      if (el[0] === 'attributes' && useTab) {
        tabs = [...tabs, {'name':(el[1]?.type), quantity: ''}]
      } else {
        tabs = [...tabs, {'name': (el[0]), quantity: `${el[1]?.records?.length || ''}`}]
      }
    }
  })
  
  console.log({tabs})
  console.log(useTab)
  console.log(item)
  console.log(formatItem(item))
  console.log(formatArrayToObject(item))
  
</script>

<style>
  .card {
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
    padding: 1em;
    display: flex;
  }

</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if tabs.length && useTab}

  <TabBar  tabs={tabs} let:tab>
    <!-- {#each tabs as key } -->

        <Tab {tab} on:click={() => {
          active = tab.name

          console.log({tab, active, prevActive})

          if (active != prevActive) {
            prevActive = active
          } 
        }}>
          <Label>{tab.name} {!!tab.quantity ? `(${tab.quantity})` : ''}</Label>
        </Tab>

    <!-- {/each}  -->
  </TabBar>

    <svelte:self 
      item={active != prevActive ? item?.[active]  
      : item?.[prevActive] ? item?.[prevActive] 
      : formatArrayToObject(formatItem(item))}
    />

{/if}

{#if !tabs.length}

  {#each formatItem(item) as [key, value]}
      
    <!-- {console.log(key, value) || ''} -->

    {#if !keysToNotDisplay.includes(key) && primitives.includes(typeof(value))}
        
      {format(key)}:

      {format(value)}         
      
      <br />
        
    {/if}


    {#if !keysToNotDisplay.includes(key) && typeof(value) == 'object' && !Array.isArray(value)}
      
        {key}: <br />

        <svelte:self 
          item={value} 
        />

    {/if}

    {#if !keysToNotDisplay.includes(key) && typeof(value) == 'object' && Array.isArray(value)}
      
      {format(key)}: ({value?.length}) <br />

      <!-- {#if open}  -->
        
        {#each value as v, i}
        
          <svelte:self item={v} useTab={true}/>
        
        {/each}

      <!-- {/if} -->

    {/if}

  {/each} 

{/if}

