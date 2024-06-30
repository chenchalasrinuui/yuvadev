"use client"
import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import styles from './Menu.module.css'
// import menuItems from './configuration.json'
// import { usePathname } from 'next/navigation'

export const Menu = () => {
  return <div>ss</div>
}

// export const Menu = () => {
//   const [left, setLeft] = useState()
//   const [menuItem, setMenuItem] = useState()
//   const [isMobileView, setIsMobileView] = useState()
//   const timeOutRef = useRef()
//   const pathname = usePathname();

//   // const location = useLocation()
//   // const navigate = useNavigate()

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     window.addEventListener('resize', fnGetScreenSize);
//     setIsMobileView(window.document.body.offsetWidth < 768 ? true : false)
//     return () => {
//       window.removeEventListener('resize', fnGetScreenSize)
//     }
//   }, [])
//   useEffect(() => {
//     if (isMobileView) {
//       setLeft(-180)
//     }
//   }, [isMobileView])
//   useEffect(() => {

//     setMenuItem(pathname.slice(1))
//   }, [pathname])
//   const fnGetScreenSize = () => {
//     clearTimeout(timeOutRef.current)
//     timeOutRef.current = setTimeout(() => {
//       if (typeof window !== 'undefined') {
//         setIsMobileView(window.document.body.offsetWidth < 768 ? true : false)
//       }
//     }, 500)
//   }
//   const fnMobileMenuBtnClick = () => {
//     setLeft(left === 0 ? -180 : -10)
//   }
//   const fnMenuItemClick = (eve) => {
//     eve.stopPropagation();
//     const { id } = eve.target;
//     if (id === "Logout") {
//       sessionStorage.clear()
//     }
//     if (isMobileView) {
//       setLeft(-180)
//     }
//   }
//   return <div>
//     {isMobileView && <button onClick={fnMobileMenuBtnClick} className={styles.mobileMenuBtn}><span></span><span></span><span></span></button>}
//     <div onClick={fnMenuItemClick} style={{ left: left }} className={isMobileView ? styles.mobileMenu : styles.menu}>

//       {
//         menuItems.map(({ screen, classes, label, path }, ind) => {
//           return <Link className={`${path == menuItem ? styles.active : ''} ${!isMobileView ? classes : ''}`} id={screen} key={"Link_" + ind} href={path} >{label}</Link>
//         })
//       }
//     </div>
//   </div>
// };
