import "./App.css";
import { Navigation } from "./components/nav/Navigation";
import { Header } from "./components/header/Header";
import { Work } from "./components/work/Work";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Experience />
      <Work />
      <Contact />
      <Navigation />
    </>
  );
}

export default App;
