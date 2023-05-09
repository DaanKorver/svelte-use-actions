---
name: useMouse
category: hook
---

## useMouse

Get mouse position

### Example
```svelte
<script>
  const { x, y } = useMouse()

  $: console.log($x, $y)
</script>
```