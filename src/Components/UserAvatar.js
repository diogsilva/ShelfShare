import React from 'react';
import { Avatar } from "@mui/material"

const UserAvatar = ({ user }) => {
    if (user.avatarImg) {
        return (
            <Avatar src={user.avatarImg} className="UserAvatar-avatar" />
        )
    } else {
        var abbreviation = "";
        var bigName = (user.realName ? user.realName : user.userName);
        var names = bigName.split(' ');

        names.map((n) => {
            abbreviation += n[0];
        })

        return (
            <Avatar className="UserAvatar-avatar UserAvatar-generic">{abbreviation}</Avatar>
        )
    }
}

export default UserAvatar;