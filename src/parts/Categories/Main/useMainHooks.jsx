import React, { useEffect, useState } from "react";
import {
  DeleteForeverRounded,
  DriveFileRenameOutlineRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  deleteProductById,
  getAllProducts,
} from "../../../api/services/products";
import { getAllCategories } from "../../../api/services/categories";
import Swal from "sweetalert2";

function useMainHooks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [idCategory, setIdCategory] = useState("");
  const openModal = (id) => {
    setIsModalOpen(true);
    setIdCategory(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalAdd = (id) => {
    setIsModalAddOpen(true);
  };

  const closeModalAdd = () => {
    setIsModalAddOpen(false);
  };

  const columns = [
    { id: "category_name", label: "Category Name", minWidth: 150 },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "right",
    },
  ];

  const [allProducts, setAllCategories] = useState("");
  const [filteredProducts, setFilteredCategories] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigate();

  const handleDeleteProduct = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will delete this Product!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await deleteProductById(id);

        Swal.fire("Deleted!", "Product Deleted.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! CODE : ${error}`,
      });
      console.error("Error: ", error);
    }
  };

  function createData(id, category_name) {
    const buttonsActions = [
      [
        <button
          key={0}
          onClick={() => openModal(id)}
          className="p-2 rounded-full hover:bg-slate-200 mr-2"
        >
          <DriveFileRenameOutlineRounded />
        </button>,
        <button
          key={1}
          onClick={() => handleDeleteProduct(id)}
          className="p-2 rounded-full hover:bg-red-200  mr-1"
        >
          <DeleteForeverRounded />
        </button>,
      ],
    ];

    return {
      category_name,
      action: buttonsActions,
    };
  }

  useEffect(() => {
    const fetchAllCategories = async () => {
      const AllCategories = await getAllCategories();

      const rows1 = AllCategories.data.map((item) =>
        createData(item._id, item.category_name)
      );

      setAllCategories(rows1);
      setFilteredCategories(rows1); // Initialize filteredProducts with all users
    };

    fetchAllCategories();

    const delay = 1500; // 1 second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  useEffect(() => {
    // Perform filtering based on searchInput and selectedCategory
    const filtered = [...allProducts].filter((category) =>
      category.category_name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchInput, allProducts]);

  return {
    allProducts: filteredProducts,
    columns,
    searchInput,
    setSearchInput,
    isLoading,

    isModalOpen,
    closeModal,
    idCategory,
    isModalAddOpen,
    openModalAdd,
    closeModalAdd,
  };
}

export default useMainHooks;
