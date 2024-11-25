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
    const  config = {
        "darkMode": darkMode,
        "toggleDarkMode": toggleDarkMode
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar
                    config ={config}
                />
                <Body darkMode={darkMode}/>
                <Footer darkMode={darkMode}/>
            </div>
        </>
    )
}


