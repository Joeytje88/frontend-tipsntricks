import http from '../constants/http-common'
const userid = localStorage.getItem("user_id")

const handleFiles = async (e) => {

    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setInputPicture(base64)

}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (() => {
            resolve(fileReader.result)
        });
        fileReader.onerror = ((error) => {
            reject(error)
        })
    })
}
export default handleFiles(e)
