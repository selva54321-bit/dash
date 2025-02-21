import React from 'react'
import { use } from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/nav.css"

export default function Nav() {
    const navi=useNavigate();
  return (
    <div className='nav'> 
      <ul>
        <li onClick={()=>navi("/academics")}>Academics</li>
        <li onClick={()=>navi("/sports")}>Sports</li>
        <li onClick={()=>navi("/remarks")}>Remarks</li>
      </ul>
    </div>
  )
}
