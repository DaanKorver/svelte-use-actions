import { writable, type Writable } from 'svelte/store';

export const references: Writable<{ title: string; href: string }[]> = writable([]);
