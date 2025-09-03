<script lang="ts">
  import { Route, Router, location } from '@wjfe/n-savant'
  import { onMount } from 'svelte'
  import Page1 from './Page1.svelte'
  import Page2 from './Page2.svelte'

  onMount(async () => {
    setTimeout(() => {
      console.log('Navigating to /page1')
      location.goTo('/page1')
    }, 2000)
  })
</script>

<div>
  <header>
    <h1 class="text-2xl font-bold my-4">Electron with @wjfe/n-savant</h1>
  </header>
  <main>
    <p>
      You can use hash or path routing.  This should work OK.
    </p>
    <p>
      <a href="https://wjfe-n-savant.hashnode.space/wjfe-n-savant/introduction">Online Documentation</a>
    </p>
    <Router>
      <Route key="page-1" path="/page1">
        <Page1 />
      </Route>
      <Route key="page-2" path="/page2">
        <Page2 />
      </Route>
    </Router>
  </main>
</div>
