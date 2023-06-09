import React from 'react'

export default function Footer() {

  return (
    <div className="footer">
        <div className="footer-text">
            <p>Copyright &copy; {new Date().getFullYear()} by Soleman Noushad | All Rights Reserved.</p>
        </div>
        <div className="footer-icon-top">
            <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
    </div>
  )
}
