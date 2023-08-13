import React, { useEffect } from "react";
import { useState } from "react";
import { getAllCategories } from "../../../api/services/categories";
import { getOneProductById, updateProductById } from "../../../api/services/products";
import {showErrorToast} from "../../../utils/showError"
import { showSuccessToast } from "../../../utils/showSuccess";

function useModalUpdateHooks(props) {
  const id = props.id || "";
  const [allCategory, setAllCategory] = useState();
  const [form, setForm] = useState({
    name: "",
    description: "",
    purchase_price: "",
    sell_price: "",
    stock: "",
    category: "",
    thumbnail: "",
    thumbnailUrl: "",
    image1: "",
    image1Url: "",
    image2: "",
    image2Url: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleOnChange = async (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files[0]) {
      if (
        files[0].type === "image/jpg" ||
        files[0].type === "image/png" ||
        files[0].type === "image/jpeg"
      ) {
        const sizeInMB = files[0].size / (1024 * 1024); // Convert bytes to MB

        if (sizeInMB >= 4) {

          showErrorToast("Image size must be less than 3 MB");
        } else {
          const file = files[0];
          const imageUrl = URL.createObjectURL(file);

          setForm({
            ...form,
            [name]: file,
            [`${name}Url`]: imageUrl,
          });
        }
      } else {
        showErrorToast("Image type must be png/jpg/jpeg");
      }
    } else {
      setForm({ ...form, [name]: value });
    }

  };

  const handleUpdateData = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const data = await updateProductById({form : form, id : id})
      if(data){
        showSuccessToast("Update Product Success")
        setTimeout(() => {
          window.location.reload()
        },2000)
      }
    } catch (error) {
      setIsLoading(false)
      showErrorToast(`Error : ${error}`)
    }finally{
      setIsLoading(false)
    }
  }


  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategories = await getAllCategories();
      setAllCategory(allCategories.data);
    };
    const fetchDataProduct = async () => {
      if (id) {
        const product = await getOneProductById(id);
        setForm({
          ...product.data,
          category: product.data.category._id,
        });
      }
    };

    fetchAllCategories();
    fetchDataProduct();
  }, [id]);

  return {
    handleOnChange,
    form,
    allCategory,
    handleUpdateData,
    isLoading
  };
}

export default useModalUpdateHooks;
