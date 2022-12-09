import React, { useEffect, useState } from "react";
import Users from "./components/users/Users";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.default.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookmark = (id) => {
        const updateUsers = users.map((user) =>
            user._id === id ? { ...user, bookmark: !user.bookmark } : user
        );
        setUsers(updateUsers);
    };

    return (
        <>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggle={handleToggleBookmark}
                />
            )}
        </>
    );
};
export default App;
