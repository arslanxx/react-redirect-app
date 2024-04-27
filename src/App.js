import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://example.com";
  }, []);
}

export default App;
