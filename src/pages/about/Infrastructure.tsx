import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { FaBuilding, FaWifi, FaMicrophone, FaLaptop, FaUsers, FaUtensils, FaHotel, FaAccessibleIcon } from 'react-icons/fa';

interface Facility {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const facilities: Facility[] = [
  {
    icon: <FaBuilding className="text-4xl text-white" />,
    title: "Modern Conference Halls",
    description: "State-of-the-art conference halls equipped with advanced presentation systems and comfortable seating arrangements."
  },
  {
    icon: <FaWifi className="text-4xl text-white" />,
    title: "High-Speed Internet",
    description: "Campus-wide high-speed Wi-Fi connectivity ensuring seamless online interactions and presentations."
  },
  {
    icon: <FaMicrophone className="text-4xl text-white" />,
    title: "Audio-Visual Equipment",
    description: "Professional-grade audio-visual equipment for high-quality presentations and live streaming capabilities."
  },
  {
    icon: <FaLaptop className="text-4xl text-white" />,
    title: "Technical Support",
    description: "Dedicated technical support team available throughout the conference to ensure smooth operations."
  },
  {
    icon: <FaUsers className="text-4xl text-white" />,
    title: "Breakout Rooms",
    description: "Multiple breakout rooms for parallel sessions, workshops, and networking opportunities."
  },
  {
    icon: <FaUtensils className="text-4xl text-white" />,
    title: "Dining Facilities",
    description: "Modern cafeteria and dining areas serving diverse cuisine options for all participants."
  },
  {
    icon: <FaHotel className="text-4xl text-white" />,
    title: "Accommodation",
    description: "On-campus guest house and partnerships with nearby hotels for comfortable stay options."
  },
  {
    icon: <FaAccessibleIcon className="text-4xl text-white" />,
    title: "Accessibility",
    description: "Fully accessible facilities with provisions for differently-abled participants."
  }
];

interface Image {
  url: string;
  caption: string;
}

const images: Image[] = [
  {
    url: "https://via.placeholder.com/800x600",
    caption: "Main Conference Hall"
  },
  {
    url: "https://via.placeholder.com/800x600",
    caption: "Breakout Session Rooms"
  },
  {
    url: "https://via.placeholder.com/800x600",
    caption: "Dining Area"
  },
  {
    url: "https://via.placeholder.com/800x600",
    caption: "Technical Support Center"
  }
];

const Infrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Conference Infrastructure
          </h1>
        </AnimatedSection>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="card p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-800">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {facility.title}
                  </h3>
                  <p className="text-gray-300">
                    {facility.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Image Gallery */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Facility Gallery
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {images.map((image, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="card overflow-hidden group bg-gray-800">
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-lg font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Information */}
        <AnimatedSection delay={400}>
          <div className="card p-8 bg-gray-800">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Additional Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our conference venue is equipped with state-of-the-art facilities to
                ensure a seamless and productive experience for all participants.
                From modern presentation equipment to comfortable accommodation
                options, we have everything covered.
              </p>
              <p>
                The venue is strategically located with easy access to public
                transportation and nearby amenities. We have ensured that all
                facilities are accessible to differently-abled participants and
                meet international standards for academic conferences.
              </p>
              <p>
                Our technical support team is available throughout the conference
                to assist with any equipment-related queries or issues. We also
                provide dedicated spaces for networking and informal discussions
                between sessions.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Infrastructure;
