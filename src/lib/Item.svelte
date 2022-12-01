<script>
  import { loop_guard } from "svelte/internal";
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  // import { createEventDispatcher } from 'svelte';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  // import Button from '@smui/button';
  import { 
    format,
    primitives,
    keysToNotDisplay,
    formatItem,
    formatArrayToObject
  } from './util'
  // import Tab from "@smui/tab/src/Tab.svelte";

  export let item = {}
  export let nextItem = {}
  export let parentKey = ''
  export let topLevel = false
  let active = ''
  // let prevActive = ''
  // let open = false

  // const toggleOpen = () => {
	// 	open = !open
	// }

  
  let tabs = [] 

  console.log({item})
  // console.log({topLevel})
  console.log('typeof', typeof(item))
  console.log('formatItem', formatItem(item))

  const type = typeof(item) 

  if (type === 'object' && type != null) {
    // console.log('isObject')
    
    formatItem(item).forEach(([key, val]) => {
      
      if (key === 'attributes') {
        tabs = [...tabs, val?.type]
      }
      if (key === 'records' && val?.length && topLevel) {
        tabs = [...tabs, val[0]?.attributes?.type]
      }
      if ((['attributes','rowLoadDate','records'].includes(key))) { return }
      
      if (typeof(val) === 'object' && val !== null) {
        tabs = [...tabs, key]
      }
    })

    console.log({tabs})
    active = tabs[0]
    // parentKey = active
  }
  
</script>

<style>
  .card {
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
    padding: 1em;
    /* display: flex; */
  }

</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {#if tabs.length}

  <TabBar  tabs={tabs} let:tab>
    <Tab {tab} on:click={() => {
      active = tab.name

      
      if (active != prevActive) {
        prevActive = active
      } 
    }}>
      <Label>{tab.name} {!!tab.quantity ? `(${tab.quantity})` : ''}</Label>
    </Tab>
  </TabBar>

    <svelte:self 
      item={active != prevActive ? item?.[active]  
      : item?.[prevActive] ? item?.[prevActive] 
      : formatArrayToObject(formatItem(item))}
    />

{/if} -->

{#if tabs.length}
  {#if  active === parentKey} 
  
    <svelte:self 
      item={nextItem}
      parentKey={active}
    />
    
  {/if}

  <TabBar tabs={tabs} let:tab bind:active>

    <Tab {tab} id={tab} on:click={() => {
      active = tab
      // console.log(active)
      console.log(active, tab)
      console.log(item[active])
      nextItem = {}
      nextItem = item[active]
      // console.log(value[active] || value)
    }}>

      <Label>
        {tab}
      </Label>
    </Tab>
  </TabBar>

  {#if item?.[active]} 
    
  <!-- <div class="card"> -->
    {#if  active !== parentKey} 
    
      <svelte:self 
        item={nextItem}
        parentKey={active}
      />

    {/if}
  <!-- </div> -->

  <!-- {:else} -->

  {/if}


{/if}

<!-- {#if !tabs.length} -->

{#each formatItem(item) as [key, value]}
<!-- {console.log({key, value})} -->
<!-- active: {active} <br />
parentKey: {parentKey} <br /> -->

    {#if !keysToNotDisplay.includes(key) }
    
      {#if (primitives.includes(typeof(value)) || value === null) }
          
        <!-- {#if active === parentKey} -->
          {format(key)}:

          {format(value)}         
          
        <br />
          
        <!-- {/if} -->

      {/if}

      <!-- {#if typeof(value) == 'object' && !Array.isArray(value) && value !== null }
        
          {key}: <br />

          <svelte:self 
            item={value} 
          />

      {/if} -->
<!-- 
      <TabBar tabs={tabs} let:tab bind:active>

        <Tab {tab} id={tab} on:click={() => {
          active = tab
          // console.log(active)
          console.log(active, value)
          console.log(value[active] || value)
        }}>

          <Label>
            {tab}
          </Label>
        </Tab>
      </TabBar> -->

      {#if typeof(value) == 'object' && Array.isArray(value) }
        
        {#if key === 'records' && value?.length}

        {#each value as v}
        
          <div class="card">

            <svelte:self 
              item={v}
              parentKey={active}
            />
          </div>
        {/each}



        <!-- {:else}

          {format(key)}: ({value?.length}) <br />
            
            {#each value as v, i}
            
              <svelte:self item={v} useTab={true}/>
            
            {/each} -->

        {/if}

      {/if}

    {/if}

  {/each} 

<!-- {/if} -->

