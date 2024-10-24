import { DataGrid } from "@mui/x-data-grid";
import {FaTrash} from "react-icons/fa";
const Parcels = () => {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      rendercell: () => {
        return (
          <>
            <button className="bg-teal-500 text-white cursor-pointer w-[70px]">
              Edit
            </button>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      rendercell: () => {
        return (
          <>
            <FaTrash />
          </>
        );
      },
    },
  ];
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>
        <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
          New Parcel
        </button>
      </div>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
};

export default Parcels;
