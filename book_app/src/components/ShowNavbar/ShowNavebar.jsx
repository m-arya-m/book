import React, {useEffect,useState} from 'react'
import { useLocation } from 'react-router'
function ShowNaveBar({children}) {
    const location = useLocation()
    const [showNavBar, setShowNavBar]= useState(true)
    const path = location.pathname.replace(/\/$/, '').toLowerCase()
    useEffect(()=>{
    console.log('this is location', location)
        if(path === '/login' || path === '/signup'){
            setShowNavBar(false)
        }else{
            setShowNavBar(true)
        }
    },[location])
  return (
    <div>
      {showNavBar && children}
    </div>
  )
}
export default ShowNaveBar
