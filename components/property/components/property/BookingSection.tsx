import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getTotalNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const totalCost = getTotalNights() * price;

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl sticky top-20">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block font-medium">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2 rounded-lg"
        />
      </div>

      <div className="mt-4">
        <label className="block font-medium">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2 rounded-lg"
        />
      </div>

      <div className="mt-4">
        <p>
          Total payment: <strong>${totalCost}</strong>
        </p>
      </div>

      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
