import http from '../constants/http-common';

const userid = localStorage.getItem("user_id");

const getGameInfo = () => {
    return http.get(`/game`)
}

const setGameInfo = async (currentGames) => {
    try {
        return await http.put(`/user/game/${userid}`,{
            currentGames,
            userid

        })
    } catch (error) {
        console.error(error)
    }
}

export default {
    getGameInfo,
    setGameInfo
}
