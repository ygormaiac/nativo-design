import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(true)
  }

  return (
    <div class="navbar">
        <li><a href="/"><img src={logo} alt="logo" /></a></li>
        <nav>
          <ul class="menu">
            <li selected={selected}><a href="/projects">projetos</a></li>
            <li selected={selected}><a href="/about">sobre</a></li>
            <li selected={selected}><a href="/contact">contato</a></li>
          </ul>
        </nav>
    </div>
  )
}