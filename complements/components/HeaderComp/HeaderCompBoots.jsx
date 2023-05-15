import { useState } from "react"

const HeaderCompBoots = ()=>{
    const [DispMenu, setDispMenu] = useState(true)

    return (
        <>
          <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">                
                <img className="MenuLogo" src={'./Images/logo.png'} alt="appy.yo logo"/>
              </a>
              <button className="navbar-toggler border border-info text-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setDispMenu(!DispMenu)}>
                <span className="navbar-toggler-icon"><img src={'/Icons/MenuIcon.png'} style={{width:'18px', border:'none'}} alt='Menu'/></span>
              </button>
              <div className={DispMenu ? "navbar-collapse collapse" : "navbar-collapse active"} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a> {/*active disabled*/}
                  </li>
                  <li className="nav-item" onClick={()=>setDispMenu(true)}>
                    <a className="nav-link" href="/AboutUs">About Us</a> {/*active disabled*/}
                  </li>
                  <li className="nav-item" onClick={()=>setDispMenu(true)}>
                    <a className="nav-link" href="/InnovationLab">Innovation Lab</a> {/*active disabled*/}
                  </li>
                  <li className="nav-item" onClick={()=>setDispMenu(true)}>
                    <a className="nav-link" href="/NewestProject">Newest Projects</a> {/*active disabled*/}
                  </li>
                  <li className="nav-item" onClick={()=>setDispMenu(true)}>
                    <a className="nav-link" href="/ProfessionalServices">Professional Services</a> {/*active disabled*/}
                  </li>
                  <li className="nav-item" onClick={()=>setDispMenu(true)}>
                    <a className="nav-link" href="/DigitalTransformation">Digital Transformation</a> {/*active disabled*/}
                  </li>
                  <li className="nav-item" onClick={()=>setDispMenu(true)}>
                    <a className="nav-link" href="/GetInTouch">Get In Touch</a> {/*active disabled*/}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
}

export { HeaderCompBoots}