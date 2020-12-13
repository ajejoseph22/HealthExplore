import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";

import { IJobListing, IFilters } from "../interfaces";
import { ISort, applyQueryFilters } from "../services/query";

interface ISliceState {
  loading: boolean;
  jobListings: IJobListing[];
  filters: IFilters | null;
  error: string | null;
}

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    loading: false,
    jobListings: [],
    filters: null,
    error: null,
  } as ISliceState,
  reducers: {
    getFiltersStart(state) {
      state.loading = true;
    },
    getFiltersSuccess(state, action: PayloadAction<IFilters>) {
      state.loading = false;
      state.filters = action.payload;
    },
    getFiltersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getJobListingsStart(state) {
      state.loading = true;
    },
    getJobListingsSuccess(state, action: PayloadAction<IJobListing[]>) {
      state.loading = false;
      state.jobListings = action.payload;
    },
    getJobListingsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getFilters = (): AppThunk => async (dispatch) => {
  dispatch(jobsSlice.actions.getFiltersStart());
  try {
    const response = await fetch("/api/filters", {
      method: "get",
    });
    const filters: IFilters = await response.json();
    dispatch(jobsSlice.actions.getFiltersSuccess(filters));
  } catch (err) {
    dispatch(jobsSlice.actions.getFiltersFailure(err && err.toString()));
  }
};

export interface ISortFilter<T> {
  filter?: T;
  sort?: ISort;
}
export const getJobListings = (
  sortFilter: ISortFilter<{ fullSearch: string }> = {}
): AppThunk => async (dispatch) => {
  dispatch(jobsSlice.actions.getJobListingsStart());
  try {
    const response = await fetch(
      applyQueryFilters("/api/jobs", sortFilter.filter, sortFilter.sort),
      {
        method: "get",
      }
    );
    const jobListings: IJobListing[] = await response.json();
    dispatch(jobsSlice.actions.getJobListingsSuccess(jobListings));
  } catch (err) {
    dispatch(jobsSlice.actions.getJobListingsFailure(err && err.toString()));
  }
};

export const reducer = jobsSlice.reducer;

export const selectors = {
  selectLoading: (state: RootState) => state.jobs.loading,
  selectJobListings: (state: RootState) => state.jobs.jobListings,
  selectFilters: (state: RootState) => state.jobs.filters,
  selectError: (state: RootState) => state.jobs.error,
};
