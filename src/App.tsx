import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {HomePage} from './pages/HomePage';
import './App.css';

// Committee Routes
import AdvisoryCommittee from './pages/committee/Advisory';
import CoPatrons from './pages/committee/CoPatron';
import OrganizingCommittee from './pages/committee/OrganisingCommittee';
import Patrons from './pages/committee/Patron';
import TechnicalCommittee from './pages/committee/TechnicalProgramCommittee';
import ChiefPatron from './pages/committee/ChiefPatron';
import Patron from './pages/committee/Patron';
import CoPatron from './pages/committee/CoPatron';
import GeneralChairs from './pages/committee/GeneralChairs';
import GeneralCoChairs from './pages/committee/GeneralCoChairs';
import HonoraryChairs from './pages/committee/HonoraryChairs';
import ProgramChair from './pages/committee/ProgramChair';
import ChiefConvenor from './pages/committee/ChiefConvenor';
import Convenor from './pages/committee/Convenor';
import KeynoteSpeakers from './pages/committee/KeynoteSpeakers';
import SteeringCommittee from './pages/committee/SteeringCommittee';
import OrganisingCommittee from './pages/committee/OrganisingCommittee';
import Advisory from './pages/committee/Advisory';
import TechnicalProgramCommittee from './pages/committee/TechnicalProgramCommittee';

// Conference Routes
import {CallForPapers} from './pages/conference/CallForPapers';
import {ImportantDates} from './pages/conference/ImportantDates';
import {Program} from './pages/conference/Program';
import Venue from './pages/conference/Venue';

// About Routes
import DesignedBy from './pages/about/DesignedBy';
import Infrastructure from './pages/about/Infrastructure';
import Institution from './pages/about/Institution';
import VisionMission from './pages/about/VisionMission';
import Tracks from "../src/pages/Tracks.tsx"
import {WhoShouldJoin} from './components/WhoShouldJoin.tsx';
import {FAQ }from './components/FAQ';
import {Benefits} from './components/Benefits.tsx';
import AboutConference from './components/AboutConference.tsx';

// Registration Routes
import {FeeStructure} from './pages/registration/FeeStructure';
import Guidelines from './pages/registration/Guidelines';
import Register from './pages/registration/Register';

// Research Route
import Research from '../src/pages/research/Research.tsx';

// Speakers Routes
import GuestSpeakers from './pages/speakers/GuestSpeakers';
import SessionChairs from './pages/speakers/SessionChairs';
import KeynoteSpeaker from './pages/speakers/KeynoteSpeaker.tsx';
// Contact Route
import {Contact }from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Committee Routes */}
            <Route path="/committee/chief-patron" element={<ChiefPatron />} />
            <Route path="/committee/patron" element={<Patron />} />
            <Route path="/committee/co-patron" element={<CoPatron />} />
            <Route path="/committee/general-chairs" element={<GeneralChairs />} />
            <Route path="/committee/general-co-chairs" element={<GeneralCoChairs />} />
            <Route path="/committee/honorary-chairs" element={<HonoraryChairs />} />
            <Route path="/committee/program-chair" element={<ProgramChair />} />
            <Route path="/committee/chief-convenor" element={<ChiefConvenor />} />
            <Route path="/committee/convenor" element={<Convenor />} />
            <Route path="/committee/keynote-speakers" element={<KeynoteSpeakers />} />
            <Route path="/committee/steering-committee" element={<SteeringCommittee />} />
            <Route path="/committee/organising-committee" element={<OrganisingCommittee />} />
            <Route path="/committee/advisory" element={<Advisory />} />
            <Route path="/committee/technical-program-committee" element={<TechnicalProgramCommittee />} />
            <Route path="/committee/advisory-committee" element={<AdvisoryCommittee />} />
            <Route path="/committee/co-patrons" element={<CoPatrons />} />
            <Route path="/committee/organizing-committee" element={<OrganizingCommittee />} />
            <Route path="/committee/patrons" element={<Patrons />} />
            <Route path="/committee/technical-committee" element={<TechnicalCommittee />} />

            {/* Conference Routes */}
            <Route path="/conference/call-for-papers" element={<CallForPapers />} />
            <Route path="/conference/important-dates" element={<ImportantDates />} />
            <Route path="/conference/program" element={<Program />} />
            <Route path="/conference/venue" element={<Venue />} />

            {/* About Routes */}
            <Route path="/about/designed-by" element={<DesignedBy />} />
            <Route path="/about/infrastructure" element={<Infrastructure />} />
            <Route path="/about/institution" element={<Institution />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/tracks" element={<Tracks />} />
            <Route path="/about/who-should-join" element={<WhoShouldJoin />} />
            <Route path="/about/faq" element={<FAQ />} />
            <Route path="/about/benefits" element={<Benefits />} />
            <Route path="/about/about-conference" element={<AboutConference />} />

            {/* Registration Routes */}
            <Route path="/registration/fee-structure" element={<FeeStructure />} />
            <Route path="/registration/guidelines" element={<Guidelines />} />
            <Route path="/registration/register" element={<Register />} />

            {/* Research Route */}
            <Route path="/research" element={<Research />} />

            {/* Speakers Routes */}
            <Route path="/speakers/guest" element={<GuestSpeakers />} />
            <Route path="/speakers/keynote" element={<KeynoteSpeaker />} />
            <Route path="/speakers/session-chairs" element={<SessionChairs />} />

            {/* Contact Route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;