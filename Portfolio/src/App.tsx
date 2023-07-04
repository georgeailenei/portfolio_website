import "./App.css";
import ListGroup from "./components/ListGroup";
import { Header } from "./components/header/Header";
import { About } from "./components/about/About";
import { Work } from "./components/work/Work";
import { References } from "./components/references/References";
import { Contact } from "./components/contact/Contact";
import { Services } from "./components/services/Services";

function App() {
  return (
    <>
      {/* remove the component when you are done testing */}
      <ListGroup />

      <Header />
      <About />
      <Services />
      <Work />
      <References />
      <Contact />
    </>
  );
}

export default App;
