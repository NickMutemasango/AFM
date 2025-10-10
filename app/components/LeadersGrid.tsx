import Image from "next/image";

interface Leader {
  id: number;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
}

interface LeadersGridProps {
  limit?: number;
}

const LeadersGrid: React.FC<LeadersGridProps> = ({ limit }) => {
  const leaders: Leader[] = [
    {
      id: 1,
      name: "Pastor Michael Johnson",
      role: "Senior Pastor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      email: "pastor.michael@afmchurch.org",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Worship Director",
      image: "https://cdn-jehol.nitrocdn.com/XBwbYFbRYVMjkUYSoaVcGgRdcPyjhKvO/assets/images/optimized/rev-33be1b1/www.acstechnologies.com/church-growth/wp-content/uploads/sites/5/2023/05/church-leadership-roles-and-responsibilities-930x620.jpg",
      email: "sarah.williams@afmchurch.org",
      phone: "+1 (555) 123-4568"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Youth Pastor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "david.chen@afmchurch.org",
      phone: "+1 (555) 123-4569"
    },
    {
      id: 4,
      name: "Elder Robert Martinez",
      role: "Church Elder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      email: "robert.martinez@afmchurch.org",
      phone: "+1 (555) 123-4570"
    },
  ];

  const displayLeaders = limit ? leaders.slice(0, limit) : leaders;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayLeaders.map((leader) => (
        <div 
          key={leader.id} 
          className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Image */}
          <div className="relative z-10 mb-6">
            <div className="relative inline-block">
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden mx-auto">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#0747A1] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0747A1] transition-colors duration-300">
              {leader.name}
            </h3>
            <p className="text-gray-600 font-medium mb-6 text-sm uppercase tracking-wide">
              {leader.role}
            </p>

            {/* Contact Info */}
            {/* <div className="space-y-3 mb-6">
              <a 
                href={`mailto:${leader.email}`}
                className="block py-3 px-4 bg-gray-100 rounded-xl hover:bg-[#0747A1] hover:text-white transition-all duration-300 group/email"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-sm">Send Email</span>
                </div>
              </a>

              <a 
                href={`tel:${leader.phone}`}
                className="block py-3 px-4 bg-gray-100 rounded-xl hover:bg-[#0747A1] hover:text-white transition-all duration-300 group/phone"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium text-sm">Make Call</span>
                </div>
              </a>
            </div> */}

            {/* Contact Details */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="text-xs text-gray-500">
                <a href={`mailto:${leader.email}`} className="hover:text-[#0747A1] transition-colors">
                  {leader.email}
                </a>
              </div>
              <div className="text-xs text-gray-500">
                <a href={`tel:${leader.phone}`} className="hover:text-[#0747A1] transition-colors">
                  {leader.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#0747A1] to-blue-400 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
};

export default LeadersGrid;