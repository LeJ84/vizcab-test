import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Building {
  id: number;
  name: string;
  surface: number;
  carbon_emission: number;
  address: string;
  postcode: number | string;
  city: string;
}

interface BuildingsState {
  buildings: Building[];
  loading: boolean;
  error: any;
}

const initialState: BuildingsState = {
  buildings: [],
  loading: true,
  error: null,
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
  reducers: {},
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

export default buildingsSlice.reducer;
