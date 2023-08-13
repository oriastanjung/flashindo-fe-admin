import React, { useEffect } from "react";
import { useState } from "react";
import {
  getAllCategories,
  getOneCategoryById,
  updateCategoryById,
} from "../../../api/services/categories";

import { showErrorToast } from "../../../utils/showError";
import { showSuccessToast } from "../../../utils/showSuccess";

function useModalUpdateHooks(props) {
  const id = props.id || "";
  const [category, setCategory] = useState();
  const [form, setForm] = useState({
    _id : "",
    category_name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpdateData = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await updateCategoryById({ form: form, id: id });
      if (data) {
        showSuccessToast("Update Category Success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      setIsLoading(false);
      showErrorToast(`Error : ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchDataCategory = async () => {
      if (id) {
        const category = await getOneCategoryById(id);
        setForm(category.data);
        setCategory(category.data.category_name)
      }
    };

    fetchDataCategory();
  }, [id]);

  return {
    handleOnChange,
    form,
    category,
    handleUpdateData,
    isLoading,
  };
}

export default useModalUpdateHooks;
