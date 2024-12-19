import React from 'react';
import  Hero  from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaLightbulb, FaClock, FaChalkboardTeacher } from 'react-icons/fa';

const Home: React.FC = () => {
  const keyDates = [
    { date: "January 15, 2024", event: "Paper Submission Deadline" },
    { date: "February 1, 2024", event: "Notification of Acceptance" },
    { date: "February 15, 2024", event: "Early Bird Registration Ends" },
    { date: "March 1, 2024", event: "Conference Dates" },
  ];

  const tracks = [
    { title: "Artificial Intelligence & Machine Learning", count: "25+ Papers" },
    { title: "Cybersecurity & Privacy", count: "20+ Papers" },
    { title: "Internet of Things", count: "15+ Papers" },
    { title: "Blockchain Technology", count: "18+ Papers" },
    { title: "Cloud Computing", count: "22+ Papers" },
    { title: "Data Science & Analytics", count: "30+ Papers" },
  ];

  const highlights = [
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Expert Speakers",
      description: "Learn from industry leaders and academic experts"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Networking",
      description: "Connect with researchers and professionals"
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovation",
      description: "Discover cutting-edge research and technologies"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Workshop Sessions",
      description: "Hands-on experience with new technologies"
    },
  ];

  return (
    <div className="fade-in">
      <Hero />

      {/* Quick Info Section */}
      <section className="section gradient-section-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="card zoom-on-hover">
                <FaCalendar className="text-4xl mb-4" />
                <h3>Conference Dates</h3>
                <p>March 1-3, 2024</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card zoom-on-hover">
                <FaMapMarkerAlt className="text-4xl mb-4" />
                <h3>Location</h3>
                <p>VIT Bhopal University</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Link to="/registration/register" className="card zoom-on-hover">
                <h3>Register Now</h3>
                <p>Early bird discount available</p>
                <button className="button mt-4">Register</button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2>Important Dates</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyDates.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card zoom-on-hover">
                  <h3>{item.date}</h3>
                  <p>{item.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <section className="section gradient-section-2">
        <div className="container">
          <AnimatedSection>
            <h2>Conference Highlights</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card zoom-on-hover">
                  <div className="text-4xl mb-4">
                    {highlight.icon}
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tracks */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2>Technical Tracks</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card zoom-on-hover">
                  <h3>{track.title}</h3>
                  <p>{track.count}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section gradient-section-1 text-center">
        <div className="container">
          <AnimatedSection>
            <h2>Join Us at the Conference</h2>
            <p>Be part of this exciting event and contribute to the future of technology</p>
            <Link to="/registration/register" className="button mt-6">
              Register Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
