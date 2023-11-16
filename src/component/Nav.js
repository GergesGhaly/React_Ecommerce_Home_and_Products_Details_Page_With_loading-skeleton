import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {

  // const state =useSelector(state=>state.handelcart)

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        LOGO
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto" >
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="About">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to='Cart' className="nav-link">
          {/* Cart <span>({state.lenght})</span> */}
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Nav