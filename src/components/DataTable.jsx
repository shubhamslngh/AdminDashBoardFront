import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const DataTable = ({
  rows,
  columns,
  initialHiddenColumns = [],
  handleEditClick,
  handleDeleteClick,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  };

  const renderColumns = columns.map((column) => ({
    ...column,
    hide: initialHiddenColumns.includes(column.field),
    renderCell:
      column.field === "actions"
        ? (params) => (
            <>
              <IconButton
                sx={{ color: "green" }}
                onClick={() => handleEditClick && handleEditClick(params.row)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                sx={{ color: "red" }}
                onClick={() =>
                  handleDeleteClick && handleDeleteClick(params.row)
                }
              >
                <DeleteOutlineIcon />
              </IconButton>
            </>
          )
        : column.renderCell,
  }));

  return (
    <Box m="15px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={renderColumns}
          components={{ Toolbar: CustomToolbar }}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          initialState={{
            columns: {
              columnVisibilityModel: initialHiddenColumns.reduce(
                (acc, column) => {
                  acc[column] = false;
                  return acc;
                },
                {}
              ),
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default DataTable;
