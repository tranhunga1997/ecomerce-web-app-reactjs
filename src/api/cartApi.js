import clientAxios from "./clientAxios";

const cartApi = {
    getCartById: params => clientAxios.get(`/carts/${params.userId}`),
    // deleteItemInCart: params => clientAxios.delete(`/carts/${params.}`)
}

export default cartApi;