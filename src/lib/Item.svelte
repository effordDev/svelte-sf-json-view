<script>
  import { loop_guard } from "svelte/internal";
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import { createEventDispatcher } from 'svelte';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import { 
    format,
    primitives,
    formatItem,
    formatArrayToObject
  } from './util'

  export let item = {}
  export let keysToNotDisplay = []
  export let nextItem = {}
  export let parentKey = ''
  export let activeKey = ''
  export let onlyFields = false
  export let labelMap = new Map()

  let active = ''
  let tabs = [] 

  const type = typeof(item) 

  if (type === 'object' && type != null) {
    
    formatItem(item).forEach(([key, val]) => {
      
      if (key === 'attributes') {
        tabs = [...tabs, val?.type]
      }
      
      // if (val?.value) { return }

      if ((['attributes','rowLoadDate','records'].includes(key)) || (val?.value)) { return }
      
      if (typeof(val) === 'object' && val !== null) {
        tabs = [...tabs, key]
      }
    })
    
    active = tabs[0]
    activeKey = parentKey
    // console.log({tabs, item, active})
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

{#if tabs.length && !onlyFields}

  {#if activeKey === parentKey && item?.attributes?.type !== activeKey}  
  
    <svelte:self 
      item={nextItem}
      parentKey={active}
      labelMap={labelMap}
      keysToNotDisplay={keysToNotDisplay}
    />
    
  {/if}

  <TabBar tabs={tabs} let:tab bind:active>

    <Tab {tab} id={tab} on:click={() => {
      
      active = tab
      
      if (active === tabs[0]) {
        nextItem = {}
        nextItem = item
      } else {
        nextItem = {}
        nextItem = item[active]
      }
      
      activeKey = tab
      console.log({active, activeKey, tab, tabs})
    }}>

      <Label>

        {format(labelMap, tab)}
        
      </Label>

    </Tab>

  </TabBar>

  {#if item?.[active]} 
    
    {#if  active !== parentKey} 
    
      <svelte:self 
        item={nextItem}
        parentKey={active}
        labelMap={labelMap}
        keysToNotDisplay={keysToNotDisplay}
      />

    {/if}

    {:else if item?.attributes?.type === activeKey && !onlyFields}
    
    <svelte:self 
      onlyFields
      item={nextItem}
      parentKey={active}
      labelMap={labelMap}
      keysToNotDisplay={keysToNotDisplay}
    />

  {/if}

{/if}

{#each formatItem(item) as [key, value]}

  {#if !keysToNotDisplay.includes(key) }
  
    {#if (primitives.includes(typeof(value)) || value === null) }

      {#if activeKey === parentKey} 
      
        {format(labelMap, key)}:

        {format(labelMap, value)}
        
        <br />

      {/if}

    <!-- dates -->
    {:else if typeof(value) === 'object' && value?.value }

      {format(labelMap, key)}:

      {format(labelMap, value.value)}

      <br />

    {/if}

    {#if typeof(value) == 'object' && Array.isArray(value) }

      {#if key === 'records' && value?.length}

        {#each value as v}
      
          <div class="card">

            <svelte:self 
              item={v}
              parentKey={active}
              labelMap={labelMap}
              keysToNotDisplay={keysToNotDisplay}
            />
             
          </div>

        {/each}

      {/if}

    {/if}

  {/if}

{/each} 

