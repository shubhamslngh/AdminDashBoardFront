import { Box } from "@mui/material";
import { mockDataContacts } from "../data/mockData";
import Header from "../components/Header";
import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme"; 
import DataTable from "../components/DataTable"; 
import { Button } from "@mui/base/Button";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEditClick(params.row)}>Edit</Button>
          <Button onClick={() => handleDeleteClick(params.row)}>Delete</Button>
        </>
      ),
    },
  ];

  const handleEditClick = (row) => {
    console.log("Edit row: ", row);
  };

  const handleDeleteClick = (row) => {
    console.log("Delete row: ", row);
  };

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="Dummy list of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .name-column--cell": {
            color: colors.greenAccent[300], // Dynamic color based on theme
          },
        }}>
        <DataTable
          rows={mockDataContacts}
          columns={columns}
          initialHiddenColumns={["address", "zipCode"]}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
