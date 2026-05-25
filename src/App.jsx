// import React from 'react'
import './App.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// import { ScrollTrigger } from 'gsap/all' // importing for all plugins
import { ScrollTrigger } from 'gsap/ScrollTrigger' // importing SCROLL trigger from specifics 
// before using any plugin we have to register it

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }


const App = () => {

  gsap.registerPlugin(useGSAP) // think it is boiler plate part of gsap in react

  gsap.registerPlugin(ScrollTrigger) // register scroll trigger to use it properly

  useGSAP(()=>{

    // gsap.to("html") // select the element
    // gsap.to("#html") // select the element with id
    // gsap.to(".html") // select the element with class
    // we can pass both selector or the dom element

    gsap.to("html", {
      backgroundColor: "#331d89",
      // duration: 5

      scrollTrigger: {
        trigger: "#section-1",
        // start: "Trigger viewport", write the potstions of trigger and viewport // this works too but works everytime when trigger and viewport crosses
         start: "top top", // section 1 tops crosses view ports top 




        markers: true, // markers are used for debugging // it shows stasrt and end in the screen view
        scrub: true, // animation ends write after the trigger starts , which we do not want so we use scrub // after this transition happens till the srolling is at bottom and reverses if the sroll is reversed

        endTrigger: "#section-4", //trigger for the end
        // end: "endTrigger viewport",
        end: "top top",
      },

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