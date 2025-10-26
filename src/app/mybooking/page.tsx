import BookingList from '@/components/BookingList';

export default function MyBookingPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">My Bookings</h1>
      <BookingList />
    </div>
  );
}
