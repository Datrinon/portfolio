import React from 'react'

function Section({title, children}) {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Section
