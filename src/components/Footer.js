import React, { Component } from 'react'
import rs_logo from '../assets/rs_logo.svg';

 class Footer extends Component {
      render() {
        return (
            <footer className="footer py-3 bg-dark">
                <div className="footer_wrapper">
                <div className="github_wrapper">
                <a href="https://github.com/YuPodd">Yuliya</a>
                 <a href="https://github.com/Abbos-rON2">Abbos</a>
                 <a href="https://github.com/Likvidas">Sergey</a>
                <a href="https://github.com/MariyaSin">Mariya</a>
                </div>
               <a href="https://rs.school/">
               <img src={rs_logo} className="rs_logo" alt="rs" />
               </a>
                </div>
                </footer>
        )
    }
}

export default Footer
