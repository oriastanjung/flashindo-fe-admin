import api, { apiMultiPart } from "../..";
import { ENDPOINT } from "../../index";
import Cookies from "js-cookie";

const getAllProducts = async () => {
  try {
    const allProducts = await api.get(ENDPOINT.PRODUCTS);
    return allProducts.data;
  } catch (error) {
    throw error;
  }
};

const getOneProductById = async (id) => {
  try {
    const product = await api.get(`${ENDPOINT.PRODUCTS}/${id}`);
    return product.data;
  } catch (error) {
    throw error;
  }
};
const createProduct = async ({ form, id }) => {
  try {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("stock", form.stock);
    formData.append("purchase_price", form.purchase_price);
    formData.append("sell_price", form.sell_price);
    formData.append("thumbnail", form.thumbnail);
    formData.append("image1", form.image1);
    formData.append("image2", form.image2);
    formData.append("category", String(form.category));

    const updatedProduct = await apiMultiPart.post(
      `${ENDPOINT.PRODUCTS}`,
      formData,
      {
        headers: {
          Accept: "multipart/form-data",
        },
      }
    );
    return updatedProduct.data;
  } catch (error) {
    throw error;
  }
};

const updateProductById = async ({ form, id }) => {
  try {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("stock", form.stock);
    formData.append("purchase_price", form.purchase_price);
    formData.append("sell_price", form.sell_price);
    formData.append("thumbnail", form.thumbnail);
    formData.append("image1", form.image1);
    formData.append("image2", form.image2);
    formData.append("category", String(form.category));

    const updatedProduct = await apiMultiPart.put(
      `${ENDPOINT.PRODUCTS}/${id}`,
      formData,
      {
        headers: {
          Accept: "multipart/form-data",
        },
      }
    );
    return updatedProduct.data;
  } catch (error) {
    throw error;
  }
};

const deleteProductById = async (id) => {
  try {
    const product = await api.delete(`${ENDPOINT.PRODUCTS}/${id}`);
    return product.data;
  } catch (error) {
    throw error;
  }
};
export {
  getAllProducts,
  getOneProductById,
  updateProductById,
  createProduct,
  deleteProductById,
};
