import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

const Parcels = () => {
  const rows = [
    { from: "alice@example.com", to: "bob@example.com", sendername: "Alice", recipientname: "Bob", note: "Meeting at 10 AM" },
    { from: "charlie@example.com", to: "dave@example.com", sendername: "Charlie", recipientname: "Dave", note: "Project update" },
    { from: "eve@example.com", to: "frank@example.com", sendername: "Eve", recipientname: "Frank", note: "Lunch tomorrow?" },
    { from: "grace@example.com", to: "heidi@example.com", sendername: "Grace", recipientname: "Heidi", note: "Report submission" },
    { from: "ivan@example.com", to: "judy@example.com", sendername: "Ivan", recipientname: "Judy", note: "Happy Birthday!" },
];


  const columns = [
    { field: "from", headerName: "From", width: 150 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "recipientname", headerName: "Recipient", width: 150 },
    { field: "to", headerName: "To", width: 150 },
    { field: "note", headerName: "Note", width: 300 },
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
