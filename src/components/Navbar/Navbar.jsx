import React, { useEffect, useId, useState } from 'react';
import { useLayoutData } from '../../globals/Context/Layout';
import { NavbarData } from '../../globals/Data/navbarData'; // Assuming this is correct
import { useDispatch, useSelector } from 'react-redux';
import { AddTab, RemoveTab } from '../../redux/tabSlice';
import { IoMdClose } from "react-icons/io";



export const Navbar = () => {
  const [lastID, setLastID] = useState(0);

  const generateID = () => {
    const newID = lastID + 1;
    setLastID(newID);
  };
  const { navbarData, setNavbarData, setSelectComp, selectComp } = useLayoutData();
  const dispatch = useDispatch();
  const tabSelector = useSelector((state =>
    state.tabmenu
  ))
  const aakriti = useSelector((state) => state.tabmenu.component)
  console.log(aakriti)
  const tabTitle = tabSelector.title;
  // console.log(tabTitle);

  const handleMenu = (title) => {
    dispatch(AddTab({ name: title.slug, id: lastID }))
    generateID()
    setNavbarData(title.slug)
  }
  const handleMenuContent = (item) => {
    setNavbarData(item.name)
  }
  const handleCloseBtn = (item) => {
    dispatch(RemoveTab(item))

    setNavbarData(aakriti)
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            {NavbarData.map((item, index) => (
              <li key={index} onClick={() => handleMenu(item)}>{item.name}</li>
            ))}
          </ul>
        </nav>
      </header>
      <div>
        {tabSelector?.title?.map((item, index) => (
          <button key={index}  >{item.name}
            {/* {console.log(item)}  */}
            <span onClick={() => handleCloseBtn(index)}><IoMdClose /></span>
          </button>
        ))}
      </div>
    </>
  )
}
