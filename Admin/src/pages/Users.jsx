import { DataGrid } from "@mui/x-data-grid";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Users = () => {
  const [data, setData] = useState([]);

  const rows = [
    { id: 1, col1: "Alice", col2: "Smith" },
    { id: 2, col1: "Bob", col2: "Johnson" },
    { id: 3, col1: "Charlie", col2: "Brown" },
    { id: 4, col1: "David", col2: "Williams" },
    { id: 5, col1: "Eva", col2: "Jones" },
    { id: 6, col1: "Frank", col2: "Garcia" },
    { id: 7, col1: "Grace", col2: "Martinez" },
    { id: 8, col1: "Hannah", col2: "Davis" },
    { id: 9, col1: "Isaac", col2: "Rodriguez" },
    { id: 10, col1: "Jack", col2: "Wilson" },
  ];

  const columns = [
    { field: "_id", headerName: "First Name", width: 150 },
    { field: "col2", headerName: "Last Name", width: 150 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" onClick={()=> handleDelete(params.row._id)}/>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest("/users");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (id) =>{
    try {
      await publicRequest(`/users/${id}`);
      windows.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users</h1>
        <Link to="/newuser">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
            New User
          </button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
