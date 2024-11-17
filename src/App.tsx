import './App.css'

import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Body from "./components/Body.tsx";

export default function App() {


  return (
      <>
          <div className="flex overflow-auto flex-col min-h-screen">
              <NavBar darMode={false}/>
              <Body darkMode={false}/>
              <Footer/>
          </div>
      </>
  )
}


