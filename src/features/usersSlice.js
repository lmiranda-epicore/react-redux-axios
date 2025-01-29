// Este archivo contiene la lógica de Redux para manejar el estado de los usuarios. Aquí se define:
// El estado inicial (users, loading, error).
// La acción asíncrona fetchUsers, que obtiene los datos de la API.
// El reducer, que actualiza el estado según el resultado de la solicitud.


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Estado inicial
const initialState = {
    users: [],
    loading: false,
    error: null,
};

//Thunk para obtener los usuarios
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

//Slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;