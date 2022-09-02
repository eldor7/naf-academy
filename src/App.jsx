import React from 'react'
import HomePage from './components/HomePage'
import StatistikaPage from './components/StatistikaPage'
import AcademyPage from './components/AcademyPage'
import CoursePage from './components/CoursePage'
import SeilPage from './components/SeilPage'
import FooterPage from './components/FooterPage'


const App = () => {
  return (
    <div>
      <HomePage/>
      <StatistikaPage/>
      <AcademyPage/>
      <CoursePage/>
      <SeilPage/>
      <FooterPage/>
    </div>
  )
}

export default App