import React, { useEffect, useState } from 'react'
import {  useLayoutData } from './globals/Context/Layout';
import { Navbar } from './components/Navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Table from './components/table/Table';
const App = () => {
  const compObj = {
    'Homepage': <Homepage />,
    'About': <About />,
    'Contact': <Contact />,
    'Table': <Table />,
  }
  const { navbarData, setNavbarData } = useLayoutData();
  const [selectComp, setSelectComp] = useState(null);
  useEffect(() => {
    setSelectComp(compObj[navbarData])
  }, [navbarData])
  return (
    <>
      <Navbar />
      {selectComp}
    </>
  )
}

export default App