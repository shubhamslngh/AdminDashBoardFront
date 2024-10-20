import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../components/DataTable";
import {
  fetchPackages,
  createPackage,
  updatePackage,
  deletePackage,
} from "../features/packages/packageSlice";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Header from "../components/Header";

const PackagesPage = () => {
  const dispatch = useDispatch();
  const { packages, status, error } = useSelector((state) => state.packages);
  const [editingPackage, setEditingPackage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  const handleEditClick = (pkg) => {
    setEditingPackage(pkg);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (pkg) => {
    dispatch(deletePackage(pkg.id));
  };

  const handleSaveClick = () => {
    if (editingPackage.id) {
      dispatch(updatePackage(editingPackage));
    } else {
      dispatch(createPackage(editingPackage));
    }
    setIsDialogOpen(false);
    setEditingPackage(null);
  };

  const handleAddClick = () => {
    setEditingPackage({ name: "", description: "", price: "" });
    setIsDialogOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingPackage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEditClick(params.row)}>Edit</Button>
          <Button onClick={() => handleDeleteClick(params.row)}>Delete</Button>
        </>
      ),
    },
  ];

  if (status === "loading") {
    return <div>Loading...</div>;
  }

if (status === "failed") {
  return (
      <Box p={6}>
      <Header title="Packages" subtitle="State Management using REDUX, you can check out GitHub for reference or use DevTOOLS"/>
    <div
      style={{
        padding: "60px",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        border: "1px solid #f5c6cb",
        borderRadius: "5px",
        }}>
        <h1>Protected Routes Auth Disabled </h1>
      <h2>Error: Google Cloud Service Unavailable</h2>
      <p>
        It appears Google Cloud services are currently down due to a payment
        issue. Please try again later or contact support.
      </p>
      </div>
      </Box>
  );
}


  return (
    <Box p={6}>
      <h1>Packages</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddClick}
        sx={{ mb: 2 }}
      >
        Add Package
      </Button>
      <DataTable
        rows={packages}
        columns={columns}
        initialHiddenColumns={["description"]}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>
          {editingPackage?.id ? "Edit Package" : "Create Package"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below to{" "}
            {editingPackage?.id ? "edit the" : "create a new"} package.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            value={editingPackage?.name || ""}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={editingPackage?.description || ""}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            type="number"
            value={editingPackage?.price || ""}
            onChange={handleChange}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveClick} color="primary">
            {editingPackage?.id ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
  );
};

export default PackagesPage;
