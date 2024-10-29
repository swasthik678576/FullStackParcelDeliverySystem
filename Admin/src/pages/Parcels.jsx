import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
const Parcels = () => {
  const [data, setData] = useState([]);

  const rows = [
    {
      from: "alice@example.com",
      to: "bob@example.com",
      sendername: "Alice",
      recipientname: "Bob",
      note: "Meeting at 10 AM",
    },
    {
      from: "charlie@example.com",
      to: "dave@example.com",
      sendername: "Charlie",
      recipientname: "Dave",
      note: "Project update",
    },
    {
      from: "eve@example.com",
      to: "frank@example.com",
      sendername: "Eve",
      recipientname: "Frank",
      note: "Lunch tomorrow?",
    },
    {
      from: "grace@example.com",
      to: "heidi@example.com",
      sendername: "Grace",
      recipientname: "Heidi",
      note: "Report submission",
    },
    {
      from: "ivan@example.com",
      to: "judy@example.com",
      sendername: "Ivan",
      recipientname: "Judy",
      note: "Happy Birthday!",
    },
  ];

  const columns = [
    { field: "from", headerName: "From", width: 150 },
    { field: "to", headerName: "To", width: 150 },
    { field: "sendername", headerName: "Sender", width: 150 },
    { field: "recipientname", headerName: "Recipient", width: 150 },
    { field: "note", headerName: "Note", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/parcel${params.row._id}`}>
              <button className="bg-teal-500 text-white cursor-pointer w-[70px]">
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <FaTrash
              className="text-red-500 cursor-pointer m-2"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.get("/parcels");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getParcels();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/parcels/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>
        <Link to="/newparcel">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
            New Parcel
          </button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
};

export default Parcels;
