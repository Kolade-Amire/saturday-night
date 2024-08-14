import './App.css'

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Body from "./components/Body.tsx";

export default function App() {


  return (
      <>
          <div className="flex overflow-auto flex-col min-h-screen">
              <Header/>
              <Body/>
              <Footer/>
          </div>
      </>
  )
}


