import { writable } from "svelte/store";
import type { Category } from "./types/Category";
import { allCategoriesItem } from "./constants";

export const selectedCategory = writable<Category>(allCategoriesItem);
