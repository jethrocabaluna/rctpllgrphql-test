import React from 'react'

export default function LaunchItem({launch : {flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <div>
      <h2>{ flight_number }</h2>
      <p>{ mission_name }</p>
      <p>{ launch_date_local }</p>
      <p>{ launch_success ? 'success' : 'failed' }</p>
    </div>
  )
}
