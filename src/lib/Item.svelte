<script>
  import { loop_guard } from "svelte/internal";
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import { createEventDispatcher } from 'svelte';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import { 
    format,
    primitives,
    keysToNotDisplay,
    formatItem,
    formatArrayToObject
  } from './util'
  // import Tab from "@smui/tab/src/Tab.svelte";
  const dispatch = createEventDispatcher()

  export let item = {}
  export let nextItem = {}
  export let parentKey = ''
  export let activeKey = ''
  export let topLevel = false
  export let labelMap = new Map()

  let active = ''
  let tabs = [] 

  // console.log({item})
  // console.log({labelMap})
  // console.log('typeof', typeof(item))
  // console.log('formatItem', formatItem(item))

  const type = typeof(item) 

  if (type === 'object' && type != null) {
    // console.log('isObject')
    
    formatItem(item).forEach(([key, val]) => {
      
      if (key === 'attributes') {
        tabs = [...tabs, val?.type]
      }
      // if (key === 'records' && val?.length && topLevel) {
      //   tabs = [...tabs, val[0]?.attributes?.type]
      // }
      if ((['attributes','rowLoadDate','records'].includes(key))) { return }
      
      if (typeof(val) === 'object' && val !== null) {
        tabs = [...tabs, key]
      }
    })
    
    active = tabs[0]
    activeKey = parentKey
    console.log({tabs, active, parentKey, activeKey, item})
    // parentKey = active
    // dispatch('tabselect', {
    //   value: active
    // }) 
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



<!-- parentKey: {parentKey} <br /> active: {active}  -->

{#if tabs.length}

  {#if activeKey === parentKey} 
  
    <svelte:self 
      item={nextItem}
      parentKey={active}
      labelMap={labelMap}
      on:tabselect
    />
    
  {/if}

  <TabBar tabs={tabs} let:tab bind:active>

    <Tab {tab} id={tab} on:click={() => {
      console.log({tabs, active, activeKey, parentKey, item})
      active = tab
      
      if (active === activeKey) {
        
        nextItem = {}
        nextItem = item
      } else {
        nextItem = {}
        nextItem = item[active]
      }
      
      
      activeKey = tab
      // console.log({tabs, active, activeKey, parentKey, item})
      
      
      dispatch('tabselect', {
        value: tab
      })    
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
        on:tabselect
      />
        <!-- on:tabselect={(event) => active = event.detail.tab} -->

    {/if}

  {/if}

  <!-- {#if active === activeKey} 
  here
    <svelte:self 
      item={nextItem}
      parentKey={active}
      labelMap={labelMap}
      on:tabselect
    />
  {/if} -->
{/if}


{#each formatItem(item) as [key, value]}

  {#if !keysToNotDisplay.includes(key) }
  
    {#if (primitives.includes(typeof(value)) || value === null) }

      {#if activeKey === parentKey} 
      
      <!-- {format(key)}: -->
        {format(labelMap, key)}:

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
              parentKey={active}
              labelMap={labelMap}
              on:tabselect
            />
             
          </div>

        {/each}

      {/if}

    {/if}

  {/if}

{/each} 

<!-- {/if} -->

