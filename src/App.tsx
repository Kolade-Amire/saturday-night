import './App.css'

import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";

export default function App() {

    const [darkMode, setDarkMode] = useState<boolean>(false);
    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

  return (
      <>
          <div className="flex flex-col min-h-screen">
              <NavBar
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
              />
              <Body darkMode={darkMode}/>
              <Footer darkMode={darkMode}/>
          </div>
      </>
  )
}


