import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="bg-site bg-cover bg-no-repeat">
      <Header/>
      <Banner/>
     <Navbar/>
     <About/>
     <Services/>
     <Work/>
     <Contact/>
     <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
