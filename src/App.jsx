import Footer from "./components/Footer"
import InfoSection from "./components/InfoSection"
import LatestUpdates from "./components/LatestUpdates"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Siderbar"
import ThingsToKnow from "./components/ThingsToKnow"
import SuccessEnablers from "./components/SuccessEnablers";

function App() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col">
          <InfoSection />
          <LatestUpdates/>
          <ThingsToKnow />
          <SuccessEnablers />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
