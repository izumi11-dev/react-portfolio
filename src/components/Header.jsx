




function Header() {




  
  return (
    <div>


      <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand ms-5" href="#">PORTFOLIO</a>
  
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item me-5">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item me-5">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item me-5">
        <a className="nav-link" href="#project">Projects</a>
      </li>
      <li className="nav-item me-5">
        <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
  </div>
</nav>
      </div>
       
    </div>
  )
}

export default Header
