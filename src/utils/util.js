import bcryptjs from "bcryptjs-react";

const Util = {};

Util.checkPasswordHash = async (password, hashPassword) => {
    return await bcryptjs.compare(password, hashPassword);
};

Util.makePasswordHash = async(password) => {
    return await bcryptjs.hash(password, 10);
}

Util.formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const stringDate = `${day}/${month}/${year} - ${hours}:${minutes}`;
    return stringDate;
}

Util.getThumb = (url, size = 'small') => {
    if (url === null) {
        return '';
    }
    size    = (size === null) ? 'big' : size;
    const results = url.match('[\\?&]v=([^&#]*)');
    const video   = (results === null) ? url : results[1];

    if (size === 'small') {
        return 'http://img.youtube.com/vi/' + video + '/2.jpg';
    }
    return 'http://img.youtube.com/vi/' + video + '/0.jpg';
};

export default Util;