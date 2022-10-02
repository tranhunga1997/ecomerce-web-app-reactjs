import clientAxios from "./clientAxios";

const productApi = {
    getAll: (limit) => clientAxios.get(`/products?limit=${limit}`),
    getDetail: (id) => clientAxios.get(`/products/${id}`)
}

export default productApi;