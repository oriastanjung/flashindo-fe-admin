import api from "../..";
import { ENDPOINT } from "../../index";

const getAllCategories = async () => {
  try {
    const allCategories = await api.get(ENDPOINT.CATEGORIES);
    return allCategories.data;
  } catch (error) {
    throw error;
  }
};
const getOneCategoryById = async (id) => {
  try {
    const category = await api.get(`${ENDPOINT.CATEGORIES}/${id}`);
    return category.data;
  } catch (error) {
    throw error;
  }
};

const updateCategoryById = async ({ form, id }) => {
  try {
    const updatedCategory = await api.put(`${ENDPOINT.CATEGORIES}/${id}`, form);
    return updatedCategory.data;
  } catch (error) {
    throw error;
  }
};

export { getAllCategories, getOneCategoryById, updateCategoryById };
