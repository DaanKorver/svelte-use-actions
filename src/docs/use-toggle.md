---
name: useToggle
category: hook
---
## useToggle
Simple toggle state


### Example
```svelte
<script>
  const { toggled, toggle } = useToggle()

  $: console.log($toggled)
</script>

<button on:click={toggle}>Toggle</button>
```