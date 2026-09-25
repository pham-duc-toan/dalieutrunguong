import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Leadership from "./components/Leadership";
import Media from "./components/Media";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Achievements />
        <Leadership />
        <Media />
      </main>
      <Footer />
    </>
  );
}
