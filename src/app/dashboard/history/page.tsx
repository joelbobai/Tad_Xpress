export default function HistoryPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-[#626F47]">Shipment History</h1>
      <ul className="space-y-4">
        <li className="rounded-md bg-white p-4 text-[#626F47] shadow">
          No shipments yet.
        </li>
      </ul>
    </div>
  );
}
