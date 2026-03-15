import axios from "axios"

const api = axios.create({
 baseURL: "https://task-manager-mf4b.onrender.com",
 withCredentials: true
})

export default api