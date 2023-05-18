import React from 'react';
import { Avatar } from "@mui/material"

const UserAvatar = ({ user }) => {
    if (user.avatarImg) {
        return (
            <Avatar src={user.avatarImg} className="profile-avatar UserAvatar-avatar" />
        )
    } else {
        var abbreviation = "";
        console.log(user)
        var bigName = (user.realName ? user.realName : user.userName);
        console.log(bigName)
        var names = bigName.split(' ');
        console.log(names)

        names.map((n) => {
            abbreviation += n[0];
        })

        console.log(abbreviation)

        return (
            <Avatar className="profile-avatar UserAvatar-avatar UserAvatar-generic">{abbreviation}</Avatar>
        )
    }
}

export default UserAvatar;