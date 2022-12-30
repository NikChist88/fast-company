import React from "react";
import UsersList from "./components/usersList/UsersList";
import UserPage from "./layouts/Users";
import NavBar from "./components/navBar/NavBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./layouts/Login";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route
                    path="/users/:userId"
                    render={(props) => <UserPage {...props} />}
                />
                <Route path="/users" component={UsersList} />
                <Route path="/login" component={Login} />
            </Switch>
        </>
    );
};
export default App;
