import { writable } from "svelte/store";
import type { Category } from "./interfaces/Category";
import { allCategoriesItem } from "./constants";

export const selectedCategory = writable<Category>(allCategoriesItem);
