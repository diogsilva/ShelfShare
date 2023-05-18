import React from 'react';

// Algoritmo para criar códigos hash
String.prototype.hashCode = function() {
    var hash = 0,
    i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}


const UserBanner = ({ user }) => {
    var cls = "UserBanner-banner";
    var img = "";

    if (user.bannerImg) {
        img = user.bannerImg;
    } else {
        cls += " UserBanner-generic";

        const genericPath = "/profiles/_generic"
        const fileNames = [
            "banner1.webp",
            "banner2.jpeg",
            "banner3.jpeg",
            "banner4.jpeg"
        ];

        const hash = user.userName.hashCode();
        const chosenFileName = fileNames[hash % fileNames.length];
        
        img = genericPath + chosenFileName;
    }

    return (
        <div className={cls} style={{backgroundImage: "url('" + img + "')"}} />
    )
}

export default UserBanner;