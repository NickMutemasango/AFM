import LeadersGrid from "../components/LeadersGrid";

export default function LeadersPage() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Leaders</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our AFM community with faith and service.
          </p>
        </div>
        <LeadersGrid />
      </div>
    </div>
  );
}