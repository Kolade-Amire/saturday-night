import './App.css'

import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";

export default function App() {

    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

  return (
      <>
          <div className="flex flex-col min-h-screen">
              <NavBar darkMode={darkMode}/>
              <Body darkMode={darkMode}/>
              <Footer darkMode={darkMode}/>
          </div>
      </>
  )
}


