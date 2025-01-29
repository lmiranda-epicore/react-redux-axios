import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/usersSlice';

function App() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]); 

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div>
        <h1>Lista de Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default App;