import bcryptjs from "bcryptjs-react";

const Util = {};

Util.checkPasswordHash = async (password, hashPassword) => {
    return await bcryptjs.compare(password, hashPassword);
};

Util.makePasswordHash = async(password) => {
    return await bcryptjs.hash(password, 10);
}

Util.formatDate = (inputDate) => {
    console.log("Input date is: " + inputDate);
    const date = new Date(inputDate);
    console.log("Parsed date: " + date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const stringDate = `${day}/${month}/${year} - ${hours}:${minutes}`;
    console.log(stringDate);
    return stringDate;
}

export default Util;