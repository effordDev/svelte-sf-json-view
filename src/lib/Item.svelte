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
  
  // let active = ''
  // let tabs = [] 
  const generateTabs = (currItem) => {
    let  t = []

    const type = typeof(currItem) 
  
    if (type === 'object' && type != null ) {
      
      formatItem(currItem).forEach(([key, val]) => {
        
        if (key === 'attributes') {
          t = [...t, val?.type]
        }
        
        // if (val?.value) { return }
  
        if ((['attributes','rowLoadDate','records'].includes(key)) || (val?.value)) { return }
        
        if (typeof(val) === 'object' && val !== null) {
          t = [...t, key]
        }
      })
      
    }
    // console.log({t})
    return t
  }
  $: formattedObject = formatItem(item).sort((a, b) => a[0]?.localeCompare(b[0]))
  $: tabs = generateTabs(item)
  $: active = activeKey ? activeKey : tabs?.length ?  tabs[0] : ''
  // activeKey = active


  console.log({nextItem, active, activeKey, parentKey, tabs, item})
  
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
      parentKey={activeKey}
      labelMap={labelMap}
      keysToNotDisplay={keysToNotDisplay}
    />
    
  {/if}

  <TabBar tabs={tabs} let:tab bind:active>

    <Tab {tab} id={tab} on:click={() => {
      
      active = tab
      
      // nextItem = {}
      
      if (tab === tabs[0]) {
        nextItem = item
      } else {
        nextItem = item[tab]
      }

      item = item
      nextItem = nextItem

      activeKey = tab
    }}>

      <Label>

        {format(labelMap, tab)} {item?.[tab.toLowerCase()]?.totalSize ? `(${item?.[tab.toLowerCase()]?.totalSize})` : ''}
        
      </Label>

    </Tab>

  </TabBar>

  {#if item?.[activeKey]} 
    
    {#if  active !== parentKey} 
    
      <svelte:self 
        item={nextItem}
        parentKey={activeKey}
        labelMap={labelMap}
        keysToNotDisplay={keysToNotDisplay}
      />

    {/if}

  {:else if item?.attributes?.type === activeKey && !onlyFields}
    
    <svelte:self 
      onlyFields
      item={nextItem}
      parentKey={activeKey}
      labelMap={labelMap}
      keysToNotDisplay={keysToNotDisplay}
    />

  {/if}

{/if}

{#each formattedObject as [key, value]}
<!-- {#each formatItem(item) as [key, value]} -->

  {#if !keysToNotDisplay.includes(key) }
  
    {#if (primitives.includes(typeof(value)) || value === null || value?.value) }

      <!-- {key}: {value} <i>activeKey: {activeKey} parentKey: {parentKey}</i><br /> -->

      {#if activeKey === parentKey} 
      
        <b>
          {format(labelMap, key)}:
        </b>

        {format(labelMap, value)}
        
        <br />

      {/if}

    {/if}

    {#if typeof(value) == 'object' && Array.isArray(value) }

      {#if key === 'records' && value?.length}
    
        {#each value as v}
         
          <!-- {#if v?.ID || v?.attributes}  -->
          
            <div class="card">

              <!-- {v.ID} -->

              <svelte:self 
                item={v}
                parentKey={activeKey}
                labelMap={labelMap}
                keysToNotDisplay={keysToNotDisplay}
              />
              
            </div>

          <!-- {/if} -->

        {/each}

      {/if}

    {/if}

  {/if}

{/each} 

