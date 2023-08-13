import React, { useEffect, useState } from "react";
import {
  DeleteForeverRounded,
  DriveFileRenameOutlineRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { deleteProductById, getAllProducts } from "../../../api/services/products";
import { getAllCategories } from "../../../api/services/categories";
import Swal from "sweetalert2";

function useMainHooks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const openModal = (id) => {
    setIsModalOpen(true);
    setIdProduct(id);
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
    { id: "thumbnailUrl", label: "Thumbnail", minWidth: 50 },
    { id: "name", label: "Name", minWidth: 150 },
    {
      id: "description",
      label: "Description",
      minWidth: 100,
      align: "left",
    },
    {
      id: "purchase_price",
      label: "Purchase Price",
      minWidth: 120,
      align: "left",
    },
    {
      id: "sell_price",
      label: "Sell Price",
      minWidth: 120,
      align: "left",
    },
    {
      id: "stock",
      label: "Stock",
      minWidth: 30,
      align: "center",
    },
    {
      id: "category",
      label: "Category",
      minWidth: 50,
      align: "left",
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "right",
    },
  ];

  const [allProducts, setAllProducts] = useState("");
  const [filteredProducts, setFilteredProducts] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allCategory, setAllCategory] = useState([
    { value: "all", label: "All" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "Active"
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
  }

  function createData(
    id,
    name,
    description,
    purchase_price,
    sell_price,
    stock,
    category,
    thumbnailUrl
  ) {
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
      thumbnailUrl,
      name,
      description,
      purchase_price,
      sell_price,
      stock,
      category,
      action: buttonsActions,
    };
  }

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategories = await getAllCategories();
      let data = allCategories.data.map((item) => {
        return {
          value: item.category_name,
          label:
            item.category_name.charAt(0).toUpperCase() +
            item.category_name.slice(1),
        };
      });
      setAllCategory([...allCategory, ...data]);
    };

    const fetchAllProducts = async () => {
      const AllProducts = await getAllProducts();
      
      const rows1 = AllProducts.data.map((item) =>
        createData(
          item._id,
          item.name,
          item.description,
          item.purchase_price,
          item.sell_price,
          item.stock,
          item.category.category_name,
          item.thumbnailUrl
        )
      );

      setAllProducts(rows1);
      setFilteredProducts(rows1); // Initialize filteredProducts with all users
    };
    fetchAllCategories();
    fetchAllProducts();

    const delay = 1500; // 1 second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  useEffect(() => {
    // Perform filtering based on searchInput and selectedCategory
    const filtered = [...allProducts].filter(
      (product) =>
        (product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchInput.toLowerCase())) &&
        (selectedCategory === "all" || product.category === selectedCategory)
    );
    setFilteredProducts(filtered);
  }, [searchInput, allProducts, selectedCategory]);

  return {
    allProducts: filteredProducts,
    columns,
    searchInput,
    setSearchInput,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    allCategory,
    isModalOpen,
    closeModal,
    idProduct,
    isModalAddOpen,
    openModalAdd,
    closeModalAdd
  };
}

export default useMainHooks;
