import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBookings } from "../features/booking/bookingsSlice";
import DataTable from "../components/DataTable"; 
import Header from "../components/Header";

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
    <div style={{ padding: 60, height: 400, width: "100%" }}>
      <div className="flex justify-between items-center p-10 mb-4">
        <Header title="Bookings" subtitle="Bookings are made using django" />
        {/* <button style={background-color: coral;}
          onClick={handleNewBooking}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          New Booking
        </button> */}
        <button
          onClick={handleNewBooking}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "2px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}>
          New Booking
        </button>
      </div>
      {bookingsStatus === "loading" && (
        <div>
          <h3>Please login to Access!!!</h3>
        </div>
      )}
      {bookingsStatus === "succeeded" && (
        <DataTable
          rows={bookings}
          columns={columns}
          initialHiddenColumns={[]}
        />
      )}
      {bookingsStatus === "failed" && (
        <div
          style={{
            padding: "60px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
            borderRadius: "5px",
            justifyContent: "center",
          }}>
          <h1>Protected Routes Auth Disabled </h1>
          <h2>Error: Google Cloud Service Unavailable</h2>
          <p>
            It appears Google Cloud services are currently down due to a payment
            issue. Please try again later or contact support.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
