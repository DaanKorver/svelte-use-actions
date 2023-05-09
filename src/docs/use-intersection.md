---
name: useIntersection
category: action
---

## useIntersection

use intersection actions

### Example
```svelte
<div
  use:intersection={{ threshold: 0.5 }}
  on:intersect={(e) => console.log(e.detail.element)}
/>
```
