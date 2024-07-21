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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var DataTable_1 = __importDefault(require("../components/DataTable"));
var packageSlice_1 = require("../features/packages/packageSlice");
var material_1 = require("@mui/material");
var PackagesPage = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_redux_1.useSelector)(function (state) { return state.packages; }), packages = _a.packages, status = _a.status, error = _a.error;
    var _b = (0, react_1.useState)(null), editingPackage = _b[0], setEditingPackage = _b[1];
    var _c = (0, react_1.useState)(false), isDialogOpen = _c[0], setIsDialogOpen = _c[1];
    (0, react_1.useEffect)(function () {
        dispatch((0, packageSlice_1.fetchPackages)());
    }, [dispatch]);
    var handleEditClick = function (pkg) {
        setEditingPackage(pkg);
        setIsDialogOpen(true);
    };
    var handleDeleteClick = function (pkg) {
        dispatch((0, packageSlice_1.deletePackage)(pkg.id));
    };
    var handleSaveClick = function () {
        if (editingPackage.id) {
            dispatch((0, packageSlice_1.updatePackage)(editingPackage));
        }
        else {
            dispatch((0, packageSlice_1.createPackage)(editingPackage));
        }
        setIsDialogOpen(false);
        setEditingPackage(null);
    };
    var handleAddClick = function () {
        setEditingPackage({ name: "", description: "", price: "" });
        setIsDialogOpen(true);
    };
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setEditingPackage(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var columns = [
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
            renderCell: function (params) { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(material_1.Button, { onClick: function () { return handleEditClick(params.row); } }, "Edit"),
                react_1.default.createElement(material_1.Button, { onClick: function () { return handleDeleteClick(params.row); } }, "Delete"))); },
        },
    ];
    if (status === "loading") {
        return react_1.default.createElement("div", null, "Loading...");
    }
    if (status === "failed") {
        return react_1.default.createElement("div", null,
            "Error: ",
            error);
    }
    return (react_1.default.createElement(material_1.Box, { p: 3 },
        react_1.default.createElement("h1", null, "Packages"),
        react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", onClick: handleAddClick, sx: { mb: 2 } }, "Add Package"),
        react_1.default.createElement(DataTable_1.default, { rows: packages, columns: columns, initialHiddenColumns: ["description"], handleEditClick: handleEditClick, handleDeleteClick: handleDeleteClick }),
        react_1.default.createElement(material_1.Dialog, { open: isDialogOpen, onClose: function () { return setIsDialogOpen(false); } },
            react_1.default.createElement(material_1.DialogTitle, null, (editingPackage === null || editingPackage === void 0 ? void 0 : editingPackage.id) ? "Edit Package" : "Create Package"),
            react_1.default.createElement(material_1.DialogContent, null,
                react_1.default.createElement(material_1.DialogContentText, null,
                    "Please fill out the form below to",
                    " ",
                    (editingPackage === null || editingPackage === void 0 ? void 0 : editingPackage.id) ? "edit the" : "create a new",
                    " package."),
                react_1.default.createElement(material_1.TextField, { autoFocus: true, margin: "dense", label: "Name", name: "name", value: (editingPackage === null || editingPackage === void 0 ? void 0 : editingPackage.name) || "", onChange: handleChange, fullWidth: true, required: true }),
                react_1.default.createElement(material_1.TextField, { margin: "dense", label: "Description", name: "description", value: (editingPackage === null || editingPackage === void 0 ? void 0 : editingPackage.description) || "", onChange: handleChange, fullWidth: true, required: true }),
                react_1.default.createElement(material_1.TextField, { margin: "dense", label: "Price", name: "price", type: "number", value: (editingPackage === null || editingPackage === void 0 ? void 0 : editingPackage.price) || "", onChange: handleChange, fullWidth: true, required: true })),
            react_1.default.createElement(material_1.DialogActions, null,
                react_1.default.createElement(material_1.Button, { onClick: function () { return setIsDialogOpen(false); }, color: "secondary" }, "Cancel"),
                react_1.default.createElement(material_1.Button, { onClick: handleSaveClick, color: "primary" }, (editingPackage === null || editingPackage === void 0 ? void 0 : editingPackage.id) ? "Update" : "Create")))));
};
exports.default = PackagesPage;
