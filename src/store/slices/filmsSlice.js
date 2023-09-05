import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchFilms = createAsyncThunk(
    'fetchFilms',
    async (pageNumber) => {
        const resposne = await filmsAPI.getMoviByPage(pageNumber);

        const data = await resposne.data.results;

        return data
    }
)

export const fetchOneFilm = createAsyncThunk(
    'fetchOneFilm',
    async (id) => {
        const response = await filmsAPI.getOneMovie(id);

        const data = await response.data

        return data
    }
)

const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState: {
        films: [],
        film: {},
        pageNumber: 1,
        isFetching: false
    },
    reducers: {
        changePage(state, action) {
            state.pageNumber = state.pageNumber + 1
        }
    },
    extraReducers: {
        [fetchFilms.pending]: (state, action) => {
            state.isFetching = true
        },
        [fetchFilms.fulfilled]: (state, action) => {
            state.films = action.payload
            state.isFetching = false
        },
        [fetchOneFilm.fulfilled]: (state, action) => {
            state.film = action.payload
        }
    }
})

export const { changePage } = filmsSlice.actions
export default filmsSlice.reducer