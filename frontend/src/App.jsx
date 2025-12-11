import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


// Pages
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
<HomePage/>

    </main>
    
<Footer/>

   
    </>
  )
}

export default App;
