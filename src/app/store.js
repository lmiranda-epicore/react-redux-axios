// Este archivo configura el store de Redux, que es donde se almacena el estado global de la aplicación.
//Este es el store, claro que si
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";

export default configureStore({
    reducer: {
        users: usersReducer,
    },
});