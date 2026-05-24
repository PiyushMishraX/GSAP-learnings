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

  useGSAP(()=>{

    // gsap.to("html") // select the element
    // gsap.to("#html") // select the element with id
    // gsap.to(".html") // select the element with class
    // we can pass both selector or the dom element

    gsap.to("html", {
      backgroundColor: "#331d89",
      duration: 5
    })

  }, [])

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