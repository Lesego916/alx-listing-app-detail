import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-b pb-4 mb-4 flex space-x-4 items-start"
        >
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-bold">{review.name}</p>
            <p className="text-yellow-500">{review.rating} ★</p>
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
