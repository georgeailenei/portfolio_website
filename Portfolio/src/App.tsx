import "./App.css";
import { Navigation } from "./components/nav/Navigation";
import { Header } from "./components/header/Header";
import { Work } from "./components/work/Work";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import { NavbarTest } from "./components/navbarTest/NavbarTest";

// import { References } from "./components/references/References";

function App() {
  return (
    <>
      {/* <NavbarTest /> */}

      <Header />
      <Experience />
      {/* <Work /> */}
      {/* <References /> */}
      {/* <Contact /> */}
      <Navigation />
    </>
  );
}

export default App;
