// Este archivo configura el store de Redux, que es donde se almacena el estado global de la aplicación.
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";

export default configureStore({
    reducer: {
        users: usersReducer,
    },
});