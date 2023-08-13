import React, { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { DeleteForeverRounded, HowToRegRounded } from "@mui/icons-material";
import {
  changeStatusUser,
  deleteUser,
  getAllUsers,
} from "../../../api/services/users";
import { useNavigate } from "react-router-dom";
function useMainHooks() {
  const columns = [
    { id: "avatarUrl", label: "Profile", minWidth: 70 },
    { id: "username", label: "Username", minWidth: 200 },
    {
      id: "email",
      label: "Email",
      minWidth: 300,
      align: "left",
    },
    {
      id: "no_telpon",
      label: "Phone",
      minWidth: 200,
      align: "left",
    },
    {
      id: "isActive",
      label: "Status",
      minWidth: 200,
      align: "left",
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "right",
    },
  ];
  const [allUsers, setAllUsers] = useState("");
  const [filteredUsers, setFilteredUsers] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [selectedStatus, setSelectedStatus] = useState("all"); // Default to "Active"
  const navigation = useNavigate();

  const handleChangeStatusUser = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will change this User status!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, change it!",
      });

      if (result.isConfirmed) {
        const res = await changeStatusUser(id);

        Swal.fire("Updated!", "User status has been changed.", "success");
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

  const handleDeleteUser = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will delete this User!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await deleteUser(id);
        Swal.fire("Deleted!", "User deleted.", "success");
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

  function createData(id, username, email, no_telpon, isActive, avatarUrl) {
    const buttonsActions = [
      [
        <button
          onClick={() => handleChangeStatusUser(id)}
          className="p-2 rounded-full hover:bg-slate-200 mr-2"
        >
          <HowToRegRounded />
        </button>,
        <button
          onClick={() => handleDeleteUser(id)}
          className="p-2 rounded-full hover:bg-red-200  mr-1"
        >
          <DeleteForeverRounded />
        </button>,
      ],
    ];

    return {
      avatarUrl,
      username,
      email,
      no_telpon,
      isActive,
      action: buttonsActions,
    };
  }

  useEffect(() => {
    const fetchAllUsers = async () => {
      const AllUsers = await getAllUsers();

      const rows1 = AllUsers.data.map((item) =>
        createData(
          item._id,
          item.username,
          item.email,
          item.no_telpon,
          item.isActive,
          item.avatarUrl
        )
      );

      setAllUsers(rows1);
      setFilteredUsers(rows1); // Initialize filteredUsers with all users
    };
    fetchAllUsers();
    const delay = 1500; // 1 second delay

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  useEffect(() => {
    // Perform filtering based on searchInput and selectedStatus
    const filtered = [...allUsers].filter(
      (user) =>
        (user.username.toLowerCase().includes(searchInput.toLowerCase()) ||
          user.email.toLowerCase().includes(searchInput.toLowerCase())) &&
        (selectedStatus === "all" || user.isActive === selectedStatus)
    );
    setFilteredUsers(filtered);
  }, [searchInput, allUsers, selectedStatus]);

  return {
    allUsers: filteredUsers,
    columns,
    searchInput,
    setSearchInput,
    isLoading,
    selectedStatus,
    setSelectedStatus,
  };
}

export default useMainHooks;
