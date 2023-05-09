---
name: useMedia
category: hook
---

## useMedia

Check media queries

### Example
```svelte
<script>
const isMobile = useMedia('(min-width: 480px)');

$: console.log($isMobile);
</script>
```