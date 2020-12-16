import React from "react";
import {Profile} from "../models/Profile";

interface IProps extends Profile {}

const User: React.FunctionComponent<IProps> = props => {
    const { fullName, title, country, imageUrl } = props;
    return (
        <div className="user">
            <img src={imageUrl} alt="profileImage" className="profile-picture"/>
            <div className="name">{fullName}</div>
            <div>{title}</div>
            <div>{country}</div>
        </div>
    )
};

export default User;
