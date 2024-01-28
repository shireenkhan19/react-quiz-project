import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import StartSection from "./components/StartSection.jsx";
import { useState } from "react";
function App() {
  const [showStartSection, setShowStartSection] = useState(true);

  function handleShowStartSection() {
    setShowStartSection(false);
  }
  return (
    <>
      <Header />
      <main>
        {showStartSection ? (
          <StartSection onClickStartBtn={handleShowStartSection} />
        ) : (
          <div id="quiz">
            <Quiz />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
