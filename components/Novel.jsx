import React from 'react'

export default ({ id, title, authorFirstName, authorLastName }) => (
  <div key={id} className="novel">
    {`${title} by ${authorFirstName} ${authorLastName}`}
  </div>
)
