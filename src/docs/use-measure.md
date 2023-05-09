---
name: useMeasure
category: action
---

## useMeasure

Measure up your elements

### Example
```svelte
<div 	
  use:measure
  on:measure={(e) => {
    console.log(e.detail.size)
  }}>
  <h2>Measure me</h2>  
</div>
```