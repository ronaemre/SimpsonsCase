const axios = require("axios").default;


const getUser = async () => {
    const response = (
        await axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
    )
    return response;
}

module.exports = {
    getUser
}