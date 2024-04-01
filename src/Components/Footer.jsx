import React, { useContext } from 'react'
import { ThemeContext } from './utils/ThemeContext';

const Footer = () => {
  const {theme} = useContext (ThemeContext);

  return (
    <footer className = {`footer${theme}`}>
        <img className = {`largeimg${theme}`} src="../../public/images/DH.png" alt='DH-logo' />
        <div>
          <img className = {`img${theme}`} src="../../public/images/ico-facebook.png"    alt='FAC-logo' />
          <img className = {`img${theme}`} src="../../public/imageS/ico-instagram.png"   alt='INS-logo' />
          <img className = {`img${theme}`} src="../../public/images/ico-whatsapp.png"    alt='WHA-logo' />
          <img className = {`img${theme}`} src="../../public/images/ico-tiktok.png"      alt='TIK-logo' />
        </div>
    </footer>
  )
}

export default Footer
