import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Property Section */}
      <div className="lg:col-span-2">
        <PropertyDetail property={property} />
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Booking Sidebar */}
      <div className="lg:col-span-1">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}
