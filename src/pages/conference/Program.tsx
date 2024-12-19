import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarDay, FaUserTie, FaUsers, FaLaptopCode, FaChalkboardTeacher, FaWineGlass } from 'react-icons/fa';

interface Session {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  location: string;
  type: 'keynote' | 'talk' | 'workshop' | 'break' | 'social';
  icon: React.ReactNode;
}

interface DaySchedule {
  date: string;
  sessions: Session[];
}

const schedule: DaySchedule[] = [
  {
    date: 'Day 1 - May 15, 2024',
    sessions: [
      {
        time: '08:00 - 09:00',
        title: 'Registration & Breakfast',
        description: 'Check-in and welcome package collection',
        location: 'Main Hall',
        type: 'break',
        icon: <FaUsers className="text-blue-400" />
      },
      {
        time: '09:00 - 10:30',
        title: 'Opening Keynote',
        description: 'The Future of AI and Machine Learning',
        speaker: 'Dr. Sarah Johnson',
        location: 'Grand Ballroom',
        type: 'keynote',
        icon: <FaUserTie className="text-purple-400" />
      },
      {
        time: '11:00 - 12:30',
        title: 'Technical Sessions',
        description: 'Parallel tracks on ML, Software Engineering, and Cloud Computing',
        location: 'Multiple Rooms',
        type: 'talk',
        icon: <FaLaptopCode className="text-green-400" />
      }
    ]
  },
  {
    date: 'Day 2 - May 16, 2024',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Workshop Sessions',
        description: 'Hands-on workshops on various technologies',
        location: 'Workshop Rooms',
        type: 'workshop',
        icon: <FaChalkboardTeacher className="text-yellow-400" />
      },
      {
        time: '11:00 - 12:30',
        title: 'Panel Discussion',
        description: 'Industry experts discuss current trends',
        location: 'Main Hall',
        type: 'talk',
        icon: <FaUsers className="text-red-400" />
      },
      {
        time: '19:00 - 22:00',
        title: 'Conference Dinner',
        description: 'Networking dinner with entertainment',
        location: 'Garden Terrace',
        type: 'social',
        icon: <FaWineGlass className="text-pink-400" />
      }
    ]
  },
  {
    date: 'Day 3 - May 17, 2024',
    sessions: [
      {
        time: '09:00 - 10:30',
        title: 'Technical Sessions',
        description: 'Research presentations and demos',
        location: 'Multiple Rooms',
        type: 'talk',
        icon: <FaLaptopCode className="text-green-400" />
      },
      {
        time: '11:00 - 12:30',
        title: 'Closing Keynote',
        description: 'Future Directions in Technology',
        speaker: 'Prof. Michael Chen',
        location: 'Grand Ballroom',
        type: 'keynote',
        icon: <FaUserTie className="text-purple-400" />
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Program: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Conference Program
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Three days of inspiring talks, workshops, and networking opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <div className="flex items-center gap-3">
                  <FaCalendarDay className="text-2xl text-blue-400" />
                  <h2 className="text-xl font-bold text-white">{day.date}</h2>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-6 space-y-6"
              >
                {day.sessions.map((session, sessionIndex) => (
                  <motion.div
                    key={sessionIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-800 rounded-lg">
                        {session.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white">{session.title}</h3>
                          <span className="text-sm text-blue-400">{session.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{session.description}</p>
                        {session.speaker && (
                          <p className="text-sm text-purple-400">Speaker: {session.speaker}</p>
                        )}
                        <p className="text-sm text-gray-400">Location: {session.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Additional Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Conference Tracks</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Software Engineering & Development</li>
                <li>Cloud Computing & Infrastructure</li>
                <li>Cybersecurity & Privacy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Session Types</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Keynote Presentations</li>
                <li>Technical Sessions</li>
                <li>Interactive Workshops</li>
                <li>Panel Discussions</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Download Full Schedule
          </motion.button>
          <p className="mt-4 text-gray-400">
            Schedule is subject to change. All times are in Pacific Time (PT)
          </p>
        </motion.div>
      </div>
    </div>
  );
};
