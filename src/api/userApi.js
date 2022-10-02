import clientAxios from "./clientAxios";

const userApi = {
    login: (username, password) => clientAxios.post('/auth/login', {username, password}),
    getAll: () => clientAxios.get('/users')
}

export default userApi;