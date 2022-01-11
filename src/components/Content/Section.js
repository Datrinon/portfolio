import React from 'react'

function Section({title, children}) {
  return (
    <section className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="section-contents">
        {children}
      </div>
    </section>
  )
}

export default Section
