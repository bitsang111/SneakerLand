import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Sneaker, SneakerId } from './types/sneakerType';
import SneakerApi from './api/sneakerApi';

type StateSneakers = {
  sneakers: Sneaker[];
};

const initialState: StateSneakers = {
  sneakers: [],
};

export const getSneakersThunk = createAsyncThunk('load/sneakers', () =>
  SneakerApi.getAllSneakers(),
);

// export const createMovieThunk = createAsyncThunk('add/movies', (body: MovieWithoutIdAndUserId) =>
//   MovieApi.createMovie(body),
// );

export const removeSneakerThunk = createAsyncThunk('remove/sneakers', (id: SneakerId) =>
  SneakerApi.removeSneaker(id),
);

// export const updateMovieThunk = createAsyncThunk(
//   'update/movies',
//   (obj: { id: MovieId; body: MovieWithoutIdAndUserId }) => MovieApi.updateMovie(obj),
// );

const sneakerSlice = createSlice({
  name: 'sneakers',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSneakersThunk.fulfilled, (state, action) => {
        state.sneakers = action.payload;
      })
      .addCase(removeSneakerThunk.fulfilled, (state, action) => {
        state.sneakers = state.sneakers.filter((sneaker) => sneaker.id !== action.payload);
      });
    //   .addCase(createMovieThunk.fulfilled, (state, action) => {
    //     state.movies.push(action.payload);
    //   })
    //   .addCase(removeMovieThunk.fulfilled, (state, action) => {
    //     state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    //   })
    //   .addCase(updateMovieThunk.fulfilled, (state, action) => {
    //     state.movies = state.movies.map((movie) =>
    //       movie.id === action.payload.id ? action.payload : movie,
    //     );
    //   });
  },
});

export default sneakerSlice;
