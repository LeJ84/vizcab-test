import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_SORTING = "carbon_emission_per_square_meter";

export interface Building {
  id: number;
  name: string;
  surface: number;
  carbon_emission: number;
  carbon_emission_per_square_meter: number;
  address: string;
  postcode: number | string;
  city: string;
}

interface BuildingsState {
  buildings: Building[];
  loading: boolean;
  error: any;
  currentSorting: keyof Building;
  currentPage: number;
}

const initialState: BuildingsState = {
  buildings: [],
  loading: true,
  error: null,
  currentSorting: DEFAULT_SORTING,
  currentPage: 1,
};

export const fetchBuildings = createAsyncThunk(
  "posts/fetchBuildings",
  async () => {
    const res = await fetch("http://localhost:3000").then((data) =>
      data.json()
    );
    return res;
  }
);

export const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      return state;
    },
    setCurrentSorting: (state, action: PayloadAction<keyof Building>) => {
      state.currentSorting = action.payload;
      state.currentPage = 1;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBuildings.fulfilled, (state, { payload }) => {
      state.buildings = payload.data.map((building: any) => ({
        ...building,
        carbon_emission_per_square_meter: Math.round(
          building.carbon_emission / building.surface
        ),
      }));
      state.loading = false;
    });
    builder.addCase(fetchBuildings.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
      state.loading = false;
    });
  },
});

export const { setCurrentPage, setCurrentSorting } = buildingsSlice.actions;

export default buildingsSlice.reducer;
