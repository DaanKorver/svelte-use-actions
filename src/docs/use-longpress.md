---
name: useLongpress
category: action
---

## useLongpress

Longpress event

### Example
```svelte
<button 
  use:longpress 
  on:longpress={() => alert('you pressed me for 2 seconds, good')}>
  longpress me
</button>
```