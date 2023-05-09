---
name: useKeyPress
category: action
---

## useKeyPress

Add key event to any type of element

### Example

```svelte
<svelte:window 
  use:keypress={{ key: 'Escape' }} 
  on:usekeypress={()=> console.log('pressed')} 
/>
```
