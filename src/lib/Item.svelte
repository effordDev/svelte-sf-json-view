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
  // let tabs = [] 
  
  $: formattedObject = formatItem(item).sort((a, b) => a[0]?.localeCompare(b[0]))
  $: tabs = generateTabs(item)
  // $: active = activeKey ? activeKey : tabs?.length ?  tabs[0] : ''
  // $: active = tabs[0]
  //   activeKey = parentKey
  
  // const type = typeof(item)
  // if (type === 'object' && type != null) {
    
  //   formatItem(item).forEach(([key, val]) => {
      
  //     if (key === 'attributes') {
  //       tabs = [...tabs, val?.type]
  //     }
      
  //     // if (val?.value) { return }
  //     if ((['attributes','rowLoadDate','records'].includes(key)) || (val?.value)) { return }
      
  //     if (typeof(val) === 'object' && val !== null) {
  //       tabs = [...tabs, key]
  //     }
  //   })
    
  //   active = tabs[0]
  //   activeKey = parentKey
  //   console.log({tabs, item, active, activeKey, parentKey, })
  // }

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
    active = t[0]
    activeKey = parentKey
    // console.log({t})
    return t
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

  {#if activeKey === parentKey && item?.attributes?.type === activeKey}  
  <!-- {console.log('1', active, activeKey, parentKey, tabs, item, nextItem)} -->
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
      
      nextItem = {}
      // item = Object.assign(item)
      if (active === tabs[0]) {
        nextItem = item
      } else {
        nextItem = item[active]
      }
      
      activeKey = tab
      // console.log({active, activeKey, tab, tabs, item, nextItem})
    }}>
      <Label>

        {format(labelMap, tab)} {item?.[tab.toLowerCase()]?.totalSize ? `(${item?.[tab.toLowerCase()]?.totalSize})` : ''}
        
      </Label>

    </Tab>

  </TabBar>

  {#if item?.[active]} 
    
    {#if  active !== parentKey} 
    
    <!-- {console.log('2',item, nextItem)} -->
      <svelte:self 
        item={nextItem}
        parentKey={activeKey}
        labelMap={labelMap}
        keysToNotDisplay={keysToNotDisplay}
      />

    {/if}

    {:else if item?.attributes?.type === activeKey && !onlyFields}

    <!-- {console.log('3', item, nextItem)} -->
    
    <svelte:self 
      onlyFields
      item={nextItem}
      parentKey={activeKey}
      labelMap={labelMap}
      keysToNotDisplay={keysToNotDisplay}
    />
  {/if}

{/if}

<!-- active: {active} activeKey: {activeKey}  parentkey:{parentKey} - { item?.attributes?.type}<br /> -->

{#each formattedObject as [key, value]}

  {#if !keysToNotDisplay.includes(key) }
  
    {#if (primitives.includes(typeof(value)) || value === null || value?.value) }

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
      
          <div class="card">

            <svelte:self 
              item={v}
              parentKey={activeKey}
              labelMap={labelMap}
              keysToNotDisplay={keysToNotDisplay}
            />
             
          </div>

        {/each}

      {/if}

    {/if}

  {/if}

{/each} 