import { useState, useEffect } from "react";

import Header from "./components/Header";
import HeaderAction from "./components/HeaderAction";
import Example from "./components/Example";
import Note from "./components/Note";
import Collection from "./components/Collection";
import FooterAction from "./components/FooterAction";
import Footer from "./components/Footer";
import MintPopup from "./components/MintPopup";

import "./App.css";

function App() {
  const [showMintPopup, setShowMintPopup] = useState(false);

  const openMintPopup = () => {
    setShowMintPopup(true);
  };

  const closeMintPopup = () => {
    setShowMintPopup(false);
  };

  return (
    <div>
      <Header />

      <main>
        {showMintPopup && <MintPopup closeMintPopup={closeMintPopup} />}

        <HeaderAction openMintPopup={openMintPopup} />
        <Example />
        <Note />
        <Collection />
        <FooterAction openMintPopup={openMintPopup} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
