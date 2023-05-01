import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Homepage from "./pages/Homepage";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PackagePage from "./pages/PackagePage";
import SinglePage from "./pages/SinglePage";
import AirTicketingPage from "./pages/AirTicketingPage";
import VisitingVisaPage from "./pages/VisitingVisaPage";
import VisaStampingPage from "./pages/VisaStampingPage";
import HajjPage from "./pages/HajjPage";
import PassportPage from "./pages/PassportPage";
import AttestationPage from "./pages/AttestationPage";
import EmigrationPage from "./pages/EmigrationPage";
import TicketPage from "./pages/TicketPage";
import DataProvider from "./DataProvider";
import Navbar from "./Components/Navbar";
import HomeNavbar from "./Components/HomeNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataProvider><Homepage /></DataProvider>} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<DataProvider><PackagePage /></DataProvider>} />
          <Route path="/packagedetails/:id" element={<SinglePage />} />
          <Route path="/airticketing" element={<AirTicketingPage />} />
          <Route path="/visitingvisa" element={<VisitingVisaPage />} />
          <Route path="/visastamping" element={<VisaStampingPage />} />
          <Route path="/hajjandumrah" element={<HajjPage />} />
          <Route path="/passport" element={<PassportPage />} />
          <Route path="/attestation" element={<AttestationPage />} />
          <Route path="/emigration" element={<EmigrationPage />} />
          <Route path="/tickets" element={<TicketPage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/homenavbar" element={<HomeNavbar />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
