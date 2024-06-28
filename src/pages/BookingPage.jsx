import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../features/booking/bookingsSlice";
import DataTable from "../components/DataTable"; // Import your DataTable component

const BookingPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  const bookingsStatus = useSelector((state) => state.bookings.status);
  const error = useSelector((state) => state.bookings.error);

  useEffect(() => {
    if (bookingsStatus === "idle") {
      dispatch(fetchBookings());
    }
  }, [bookingsStatus, dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    // Add more columns as needed
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      {bookingsStatus === "loading" && <div>Loading...</div>}
      {bookingsStatus === "succeeded" && (
        <DataTable rows={bookings} columns={columns} />
      )}
      {bookingsStatus === "failed" && <div>{error}</div>}
    </div>
  );
};

export default BookingPage;
