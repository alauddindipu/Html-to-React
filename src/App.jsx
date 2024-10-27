import './App.css'
import About from './Pages/About'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import SummaryResume from './Pages/SummaryResume'
import WhatDo from './Pages/WhatDo'

function App() {

  return (
    <>
      <Header></Header>

      <main>
        <About></About>

        <WhatDo></WhatDo>
        <SummaryResume></SummaryResume>

      </main>
      <Footer></Footer>

    </>
  )
}

export default App
