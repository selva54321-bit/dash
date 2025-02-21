import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/nav.css"

export default function Navfacultiy() {
  const navi=useNavigate();
  return (
    <div className='nav'>
      <ul>
      <li onClick={()=>navi("/books")}>Books</li>
      <li onClick={()=>navi("/portions")}>Portions</li>
      <li onClick={()=>navi("/timetable")}>Timetable</li>

      </ul>
    </div>
  )
}
