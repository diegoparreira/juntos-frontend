import bcryptjs from "bcryptjs-react";

const Util = {};

Util.checkPasswordHash = async (password, hashPassword) => {
    return await bcryptjs.compare(password, hashPassword);
};

Util.makePasswordHash = async(password) => {
    return await bcryptjs.hash(password, 10);
}

export default Util;