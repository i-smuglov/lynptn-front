import Header from "./components/Header";
import HeaderAction from "./components/HeaderAction";
import Example from "./components/Example";
import Note from "./components/Note";
import Collection from "./components/Collection";
import FooterAction from "./components/FooterAction";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main>
        <HeaderAction />
        <Example />
        <Note />
        <Collection />
        <FooterAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;
