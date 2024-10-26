import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

const Parcels = () => {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    
    
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px]">
          <span className="text-[18px] text-[#444] ">All Parcels</span>
          <span className="font-semibold text-[#444] ">Alok Mondala</span>
        </div>

        <div className="p-3">
        <DataGrid rows={rows} columns={columns} 
        checkboxSelection
        />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
