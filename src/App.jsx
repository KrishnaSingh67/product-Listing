import { useState } from 'react'
import Header from './components/hreader/Header'
import Sidebar from './components/main/SIDEBAR/Sidebar'
import Content from './components/main/contents/Content'
import Footer from './components/footer/Footer'


// import Sidebar from './components/main/SIDEBAR/Sidebar'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
     <Header/>
     <Sidebar/>
    <Content/>
    <Footer/>
      </div>
    </>
  )
}

export default App
