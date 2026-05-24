// import React from 'react'
import './App.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }


const App = () => {

  gsap.registerPlugin(useGSAP) // think it is boiler plate part of gsap in react

 

  return (
    <main>
      <section id="section-1">section 1</section>
      <section id="section-2">section 2</section>
      <section id="section-3">section 3</section>
      <section id="section-4">section 4</section>
    </main>
  )
}

export default App