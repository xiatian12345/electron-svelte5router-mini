<script lang="ts">
  import { goto } from '@mateothegreat/svelte5-router'
  import { Button } from 'flowbite-svelte'
</script>

<div class="flex flex-col gap-4 items-center justify-center h-full">
  This is page1
  <Button
    onclick={() => {
      console.log('before:', location.href)
      goto('/page2')
      console.log('after:', location.href)
    }}>goto page2</Button
  >
</div>

<style>
</style>
