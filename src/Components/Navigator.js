import React from 'react'
import { Link } from 'react-router-dom'

// onchange = (event) => {
//     this.setState({
//         [event.target.name]: event.target.value,
//     });
// };

const Navigator = () => {
    return (
        <>
        <div class="text-center">
            <div className='header'
                 style={{marginTop: 200, fontSize: 30}}>
                <nav className="navbar navbar-expand-lg  ">
                    <Link to='/home' className="navbar-brand" style={{fontSize:30, marginLeft:300}} >Home</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/tourism' className="nav-link" >Tourism </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/technology' className="nav-link" >Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/fitness' className="nav-link" >Fitness</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/food' className="nav-link" >Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='bollywood' className="nav-link" >Bollywood</Link>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
            </div>
        </>
    )
}

export default Navigator