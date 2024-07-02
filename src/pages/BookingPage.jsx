import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBookings } from "../features/booking/bookingsSlice";
import DataTable from "../components/DataTable"; // Import your DataTable component

const BookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    { field: "booking_date", headerName: "DATE of BOOKING", width: 150 },
    { field: "travel_date", headerName: "Travel date", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  const handleNewBooking = () => {
    navigate('/new-booking'); 
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="flex justify-between items-center p-10 mb-4">
        <h1 className="text-2xl place-items-start font-bold">Bookings</h1>
        <button
          onClick={handleNewBooking}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          New Booking
        </button>
      </div>
      {bookingsStatus === "loading" && <div><h3>Please login to Access!!!</h3></div>}
      {bookingsStatus === "succeeded" && (
        <DataTable
          rows={bookings}
          columns={columns}
          initialHiddenColumns={[]} 
        />
      )}
      {bookingsStatus === "failed" && <div>{error}</div>}
    </div>
  );
};

export default BookingPage;
