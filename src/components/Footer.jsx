import React from 'react'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                        </a>
                        <span class="text-muted">© 2022 Farrel Muhamamad</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-muted" href="https://github.com/farrelmuhammad"><FiGithub /></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://linkedin.com/in/farrelmuhammad"><FiLinkedin /></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://instagram.com/farrelmuhammaad"><FiInstagram /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer