"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var x_data_grid_1 = require("@mui/x-data-grid");
var material_2 = require("@mui/material");
var theme_1 = require("../theme");
var Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
var DeleteOutline_1 = __importDefault(require("@mui/icons-material/DeleteOutline"));
var DataTable = function (_a) {
    var rows = _a.rows, columns = _a.columns, _b = _a.initialHiddenColumns, initialHiddenColumns = _b === void 0 ? [] : _b, handleEditClick = _a.handleEditClick, handleDeleteClick = _a.handleDeleteClick;
    var theme = (0, material_2.useTheme)();
    var colors = (0, theme_1.tokens)(theme.palette.mode);
    var CustomToolbar = function () {
        return (react_1.default.createElement(x_data_grid_1.GridToolbarContainer, null,
            react_1.default.createElement(x_data_grid_1.GridToolbarColumnsButton, null),
            react_1.default.createElement(x_data_grid_1.GridToolbarQuickFilter, null)));
    };
    var renderColumns = columns.map(function (column) { return (__assign(__assign({}, column), { hide: initialHiddenColumns.includes(column.field), renderCell: column.field === "actions"
            ? function (params) { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(material_1.IconButton, { sx: { color: "green" }, onClick: function () { return handleEditClick && handleEditClick(params.row); } },
                    react_1.default.createElement(Edit_1.default, null)),
                react_1.default.createElement(material_1.IconButton, { sx: { color: "red" }, onClick: function () {
                        return handleDeleteClick && handleDeleteClick(params.row);
                    } },
                    react_1.default.createElement(DeleteOutline_1.default, null)))); }
            : column.renderCell })); });
    return (react_1.default.createElement(material_1.Box, { m: "15px" },
        react_1.default.createElement(material_1.Box, { m: "40px 0 0 0", height: "75vh", sx: {
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
                    color: "".concat(colors.greenAccent[200], " !important"),
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: "".concat(colors.grey[100], " !important"),
                },
            } },
            react_1.default.createElement(x_data_grid_1.DataGrid, { rows: rows, columns: renderColumns, components: { Toolbar: CustomToolbar }, pageSize: 10, rowsPerPageOptions: [5, 10, 20], initialState: {
                    columns: {
                        columnVisibilityModel: initialHiddenColumns.reduce(function (acc, column) {
                            acc[column] = false;
                            return acc;
                        }, {}),
                    },
                } }))));
};
exports.default = DataTable;
