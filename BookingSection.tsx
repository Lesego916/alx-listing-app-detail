import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nights =
    checkIn && checkOut
      ? (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
      : 0;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg sticky top-4">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in/out */}
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="border p-2 w-full mt-1" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="border p-2 w-full mt-1" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      {/* Total */}
      <div className="mt-4">
        <p>Total payment: <strong>${nights > 0 ? nights * price : 0}</strong></p>
      </div>

      <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
