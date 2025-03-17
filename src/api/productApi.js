import axiosClient, { handleResponse } from "./axiosClient";

const productApi = {
  getAllProduct: (params) => {
    return handleResponse(
      axiosClient.get("/product", {
        params,
      })
    );
  },
  createProduct: (body) => {
    return handleResponse(axiosClient.post("/product", body));
  },
  getProductDetail: (id) => {
    return handleResponse(axiosClient.get(`/product/${id}`));
  },
  updateProduct: (id, body) => {
    return handleResponse(axiosClient.post(`/product/${id}`, body));
  },
  deleteProduct: (id) => {
    return handleResponse(axiosClient.delete(`/product/${id}`));
  },
};

export default productApi;
