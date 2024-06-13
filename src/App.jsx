import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'

function App() {
  
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App
