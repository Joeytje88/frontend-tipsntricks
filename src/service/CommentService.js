import http from '../constants/http-common'

const deleteComment = async (commentid) => {
    try {
        const deleteMessage = http.delete(`http://localhost:8080/api/comment/${commentid}`);
        getpost()
    } catch (error) {
        console.log(error)
    }
}
export  default deleteComment();
