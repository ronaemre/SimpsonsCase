import axios from 'axios'

export const getUser = async () => {
    const response = (
        await axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
    )
    return response;
}



export const deleteUser = async (id) => {
    const response = (
        await axios.delete(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`)
    )
    return getUser();
}
