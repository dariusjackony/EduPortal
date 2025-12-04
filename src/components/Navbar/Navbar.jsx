import Logo from "../../assets/logo.svg";
import LangLogo from "../../assets/language.svg";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar(){
    const [Open , setOpen] = useState(false);
    return(
        <nav className="navbar-container">
           <div className="nav-items">
             <a href="">
                <span><img src={Logo} className="nav-logo"/></span>
                <span className="logo-name">EduPortal</span>
             </a>

                <div className= {`nav-links ${Open ? "Open" : ""}`}>
                    <ul className="navigation-links" onClick={() => setOpen(false)}>
                        <Link to='/'><li>Home</li></Link> 
                        <Link to='/About'><li >About</li></Link>
                        <li>Academics</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="nav-lang">
                      <img src={LangLogo} className="langLogo" />
                      <select onChange={(e) => console.log("Language changed to", e.target.value)}>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                        <option value="sw">Swahili</option>
                      </select>
                </div>
                 <button className="nav-applyBtn">Apply Now</button>
                  <div className="hamburger" onClick={() => setOpen(!Open)}>
                    ☰
                </div>
           </div>
        </nav>
    )
}
export default Navbar;