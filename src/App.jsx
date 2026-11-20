import {
  About, Contact, Experience, Hero, Navbar, Tech, Works, Research, Footer,
  StarsCanvas, Preloader, CursorGlow, ScrollProgress, Aurora,
} from "./components";

const App = () => (
  <div className="relative z-0 bg-ink noise">
    <Preloader />
    <ScrollProgress />
    <CursorGlow />
    <Aurora />
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Tech />
    <Works />
    <Research />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
);

export default App;
