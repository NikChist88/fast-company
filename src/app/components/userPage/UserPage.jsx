import { useHistory } from "react-router-dom";
import { React, useState, useEffect } from "react";
import api from "../../api";
import PropTypes from "prop-types";
import QualitiesList from "../qualitiesList/QualitiesList";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.default.getById(userId).then((data) => setUser(data));
    });

    const handleClick = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <>
                <h2>{user.name}</h2>
                <h3>Профессия: {user.profession.name}</h3>
                <span>
                    <QualitiesList qualities={user.qualities} />
                </span>
                <h6>Встретился раз: {user.completedMeetings}</h6>
                <h4>Рейтинг: {user.rate}</h4>
                <button onClick={() => handleClick()}>Все пользователи</button>
            </>
        );
    }
    return "Loading...";
};

UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
