<script lang="ts">
  import { location } from '@wjfe/n-savant'
  import { Button } from 'flowbite-svelte'
</script>

<div class="flex flex-col gap-4 items-center justify-center h-full">
  This is page1
  <Button
    onclick={() => {
      console.log('before:', location.url.href)
      location.navigate('/page2')
      console.log('after:', location.url.href)
    }}>goto page2</Button
  >
</div>

<style>
</style>
