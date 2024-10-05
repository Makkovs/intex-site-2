import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Filters {
  category: string | null;
  sort: string | null;
  search: string;
}

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    category: null,
    sort: null,
    search: ""
  } as Filters,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<string | null>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    }
  }
});

export const { setCategory, setSort, setSearch } = filterSlice.actions;