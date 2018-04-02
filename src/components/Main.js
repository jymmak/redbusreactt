import React from 'react'
import MainTab from '../containers/MainTab'
import MainContent from '../containers/MainContent'

const Main = () => {
  return (
    <section className="container px-0">

      <MainTab />
      <div className="tab-content p-3">
        <MainContent />
      </div>
    </section>
  )

}

export default Main