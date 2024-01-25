import Form from "./components/Form";
import Card from "./components/Card";
import "./App.css";
import { createContext, useState } from "react";
const CardContext = createContext();

function App() {
  const [cardName, setCardName] = useState("");
  return (
    <CardContext.Provider value={cardName}>
      <div className="App">
        <Card cardName={cardName} />
        <Form cardName={cardName} />
      </div>
    </CardContext.Provider>
  );
}

export default App;
