import react from "react";
import {FaGit,FaLinkedin,FaGoogleDrive} from "react-icons/fa"


export function Navbar() {
  return <>
    <div className="Maindiv">
      <div className="logo">
        <h1>Purushotham Reddy</h1>
      </div>
      <div className="sections">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="Media">
            <ul>
                  <li>
                        <a href="https://github.com/NAVEED476/unit3repo"><FaGit/></a>
                  </li>
                  <li>
                        <a href="https://www.linkedin.com/in/naveed-s-61b475223/"><FaLinkedin/></a>
                  </li>
                  <li>
                        <a href="https://drive.google.com/drive/u/0/my-drive"><FaGoogleDrive/></a>
                  </li>
            </ul>

      </div>
      
    </div>
    <div className="intro">
          <h1>hi welcome to my page</h1> 
    </div>
    </>
    
    

}
