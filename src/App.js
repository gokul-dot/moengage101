import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
             <Link className="navbar-brand" to={'/sign-in'}><img className="img-size" src={require('/Users/gokul.reddy/Downloads/login-signup-react-bootstrap-main/src/moe-bluelogo.png')} /></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to={'/sign-in'}>Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/sign-up'}>Admin</Link></li>
              </ul>
            </div>
          </div>
        </nav>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
      </div>
    </Router>
  )
}
export default App