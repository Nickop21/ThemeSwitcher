import React from 'react'
import ThemeBtn from './ThemeBtn'

function Header() {
   
  return (
 <div style={{
    width:'100%',
    height:'100px',
    background:'#8d86864f',
    position:'fixed',
    top:'0',
    left:'0',
    display:'flex',
    alignItems:'center',
    justifyContent:'end'
 }}>
    <ThemeBtn/>

 </div>
  )
}

export default Header