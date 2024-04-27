import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.location.href = "https://example.com";
  }, []);
}

export default App;
