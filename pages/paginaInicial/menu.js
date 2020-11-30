import React from 'react'

function Menu () {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderColor: 'red' ,borderStyle :'groove' , borderTop: 'none', borderLeft:'none', borderRight:'none',backgroundRepeat: 'no-repeat',}}>
                <img src="https://jonz.com.br/bzuzarte/logo_Barbara.png" width="8%" style={{marginLeft:'10%', borderRadius: "50%"}}></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav" style={{  marginLeft: '30%' }}>
                        <li className="nav-item active">
                            <a style={{ textAlign: "center", fontFamily: 'roboto' }} className="nav-link" href="#">Home <span className="sr-only" >(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a style={{ textAlign: "center", fontFamily: 'roboto' }} className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ textAlign: "center", fontFamily: 'roboto' }} className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a style={{ textAlign: "center", fontFamily: 'roboto' }} className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu;