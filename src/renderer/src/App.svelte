<script lang="ts">
  import { Router, goto } from '@mateothegreat/svelte5-router'
  import { routes } from './route'
  import { onMount } from 'svelte'

  onMount(async () => {
    setTimeout(() => {
      console.log('Navigating to /page1')
      goto('/page1')
    }, 2000)
  })
</script>

<div>
  <Router {routes}></Router>
</div>
