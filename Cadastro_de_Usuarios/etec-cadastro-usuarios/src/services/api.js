import axios from 'axios'

//Criando conexão com o back
const api = axios.create({
    //CTRL + espaço para ver as opções
    baseURL: 'http://localhost:3000'
})

export default api