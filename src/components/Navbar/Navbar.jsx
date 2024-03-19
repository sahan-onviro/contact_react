import React from 'react'
import { useLayoutData } from '../../globals/Context/Layout'
import { NavbarData } from '../../globals/Data/navbarData';
export const Navbar = () => {
  const { navbarData, setNavbarData } = useLayoutData();
  return (
    <header>
      <nav>
        <ul>
          {NavbarData.map((item, index) => (
            <li key={index} onClick={() => setNavbarData(item.slug)}>{item.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
