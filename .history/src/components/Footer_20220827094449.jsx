import React from 'react'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                        </a>
                        <span className="text-muted">© 2022 Farrel Muhamamad</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://github.com/farrelmuhammad"><FiGithub /></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://linkedin.com/in/farrelmuhammad"><FiLinkedin /></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://instagram.com/farrelmuhammaad"><FiInstagram /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer