import "./App.css";
import { Navigation } from "./components/nav/Navigation";
import { Header } from "./components/header/Header";
import { Work } from "./components/work/Work";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";

// import { References } from "./components/references/References";

function App() {
  return (
    <>
      {/* remove the component when you are done testing */}
      {/* <ListGroup /> */}

      <Header />
      <Experience />
      {/* <Work />  */}
      {/* <References /> */}
      {/* <Contact /> */}
      <Navigation />
    </>
  );
}

export default App;
