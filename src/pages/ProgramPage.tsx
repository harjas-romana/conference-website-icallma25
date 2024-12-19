import { motion } from 'framer-motion';

const schedule = {
  day1: {
    date: "June 20, 2024",
    events: [
      { time: "08:00 - 09:00", event: "Registration and Breakfast" },
      { time: "09:00 - 09:30", event: "Opening Ceremony", speakers: ["Dr. John Smith", "Dr. Jane Doe"] },
      { time: "09:30 - 10:30", event: "Keynote Speech: The Future of LLMs", speaker: "Prof. Alan Johnson" },
      { time: "10:30 - 11:00", event: "Coffee Break" },
      { time: "11:00 - 12:30", event: "Technical Session 1: LLM Architecture", papers: 4 },
      { time: "12:30 - 14:00", event: "Lunch Break" },
      { time: "14:00 - 15:30", event: "Technical Session 2: Applications", papers: 4 },
      { time: "15:30 - 16:00", event: "Coffee Break" },
      { time: "16:00 - 17:30", event: "Panel Discussion: Ethics in AI", moderator: "Dr. Sarah Wilson" },
      { time: "19:00 - 21:00", event: "Welcome Reception" }
    ]
  },
  day2: {
    date: "June 21, 2024",
    events: [
      { time: "08:30 - 09:00", event: "Morning Coffee" },
      { time: "09:00 - 10:00", event: "Keynote Speech: AI Safety", speaker: "Prof. Maria Garcia" },
      { time: "10:00 - 10:30", event: "Coffee Break" },
      { time: "10:30 - 12:00", event: "Technical Session 3: Training Methods", papers: 4 },
      { time: "12:00 - 13:30", event: "Lunch Break" },
      { time: "13:30 - 15:00", event: "Technical Session 4: Model Optimization", papers: 4 },
      { time: "15:00 - 15:30", event: "Coffee Break" },
      { time: "15:30 - 17:00", event: "Workshop: Hands-on LLM Training" },
      { time: "19:00 - 22:00", event: "Gala Dinner" }
    ]
  },
  day3: {
    date: "June 22, 2024",
    events: [
      { time: "08:30 - 09:00", event: "Morning Coffee" },
      { time: "09:00 - 10:00", event: "Keynote Speech: Industry Applications", speaker: "Dr. Robert Chen" },
      { time: "10:00 - 10:30", event: "Coffee Break" },
      { time: "10:30 - 12:00", event: "Technical Session 5: Real-world Implementations", papers: 4 },
      { time: "12:00 - 13:30", event: "Lunch Break" },
      { time: "13:30 - 15:00", event: "Poster Session" },
      { time: "15:00 - 15:30", event: "Coffee Break" },
      { time: "15:30 - 16:30", event: "Best Paper Awards" },
      { time: "16:30 - 17:00", event: "Closing Ceremony" }
    ]
  }
};

const workshops = [
  {
    title: "Hands-on LLM Training",
    description: "Learn practical techniques for training and fine-tuning large language models",
    instructor: "Dr. Michael Brown",
    duration: "3 hours",
    requirements: ["Basic Python knowledge", "Understanding of deep learning concepts", "Laptop with GPU"]
  },
  {
    title: "Responsible AI Development",
    description: "Best practices for developing ethical and responsible AI systems",
    instructor: "Dr. Emily White",
    duration: "2 hours",
    requirements: ["Basic understanding of AI/ML", "Interest in AI ethics"]
  }
];

const DaySchedule = ({ date, events }: { date: string; events: any[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-12"
  >
    <h3 className="text-2xl font-bold text-white mb-6">{date}</h3>
    <div className="space-y-4">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="mb-2 sm:mb-0">
              <span className="text-blue-400 font-semibold">{event.time}</span>
            </div>
            <div className="flex-grow sm:ml-6">
              <h4 className="text-white font-semibold">{event.event}</h4>
              {event.speaker && (
                <p className="text-purple-400 text-sm">Speaker: {event.speaker}</p>
              )}
              {event.speakers && (
                <p className="text-purple-400 text-sm">
                  Speakers: {event.speakers.join(", ")}
                </p>
              )}
              {event.moderator && (
                <p className="text-purple-400 text-sm">
                  Moderator: {event.moderator}
                </p>
              )}
              {event.papers && (
                <p className="text-gray-400 text-sm">{event.papers} papers</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conference Program
        </motion.h1>
        {/* Schedule */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Schedule</h2>
          <DaySchedule date={schedule.day1.date} events={schedule.day1.events} />
          <DaySchedule date={schedule.day2.date} events={schedule.day2.events} />
          <DaySchedule date={schedule.day3.date} events={schedule.day3.events} />
        </section>

        {/* Workshops */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10">Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {workshop.title}
                </h3>
                <p className="text-gray-300 mb-4">{workshop.description}</p>
                <div className="mb-4">
                  <span className="text-purple-400 font-semibold">
                    Instructor:
                  </span>{" "}
                  <span className="text-white">{workshop.instructor}</span>
                </div>
                <div className="mb-4">
                  <span className="text-purple-400 font-semibold">
                    Duration:
                  </span>{" "}
                  <span className="text-white">{workshop.duration}</span>
                </div>
                <div>
                  <span className="text-purple-400 font-semibold block mb-2">
                    Requirements:
                  </span>
                  <ul className="list-disc list-inside text-gray-300">
                    {workshop.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
