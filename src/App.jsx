import React from 'react'
import Header from './assets/components/Header/Header'
import Onesection from './assets/components/Main/Onesection/OneSection'
import Twosection from './assets/components/Main/Twosection/TwoSection'
import Threesection from './assets/components/Main/Threesection/ThreeSection'
import Foursection from './assets/components/Main/Foursection/FourSection'
import Fivesection from './assets/components/Main/Fivesection/FiveSection'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Onesection/>
        <Twosection/>
        <Threesection/>
        <Foursection/>
        <Fivesection/>
      </main>
    </>
  )
}

export default App