import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo-GdqARQRt.png'
// import navStyle from './Navbar.module.css'
export default function Navbar() {
  return <nav 
  className="navbar navbar-expand-lg bg-second text-white position-fixed top-0 end-0 start-0 z-3"
  >
  <div className="container">
    <Link className="navbar-brand text-main d-flex align-items-center " to="/home">
    <img className='logo d-block' src={logo} alt="adasa logo" />
    <div className='me-1' >
        <h3 className='m-0 text-end text-white'>عدسة</h3>
        <span className='fs-6'>عالم التصوير الفوتوغرافي</span>
    </div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 text-white p-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white " aria-current="page" to="/home" >الرئيسية</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white"to="/blog">المدونة</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white"to="who-are-we">من نحن</NavLink>
        </li>
        
      </ul>
      <div >
        <span className='search d-none d-lg-inline-block p-2  rounded rounded-3 fw-bold ms-2 ' >
            <i className='fa-solid fa-search '></i>
        </span>
        <Link className=' d-block d-lg-inline mt-4 mt-md-0 text-decoration-none text-white p-3 bg bg-main rounded rounded-5 fw-bold' to="/blog" >أبدا القراءة</Link>
    </div>
    </div>
    
  </div>
</nav>

}
