import { useState } from "react"
import { FaHeadphones } from "react-icons/fa"
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr"
import "./nav.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const openMenu = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className="nav-container">
            <nav>
                <div className="logo">
                    <h2>Stanford</h2>
                </div>
                <div className="menu">
                    <ul className="large-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Pages <AiOutlineDown style={{ marginLeft: 10 }} />

                            <div className="box">
                                <ul>
                                    <li>Pricing Plan</li>
                                    <li>Features</li>
                                    <li>Free Quote</li>
                                    <li>Our Team</li>
                                    <li>Testimonial</li>
                                    <li>404 Page</li>
                                </ul>
                            </div>

                        </li>
                        <li>Contact</li>

                        <li>

                            <a href="tel:+998990373914"><FaHeadphones className="fa" /> {/*+012 345 6789+*/}</a>
                        </li>
                    </ul>

                    <div className="mobile-menu">
                        <div onClick={openMenu}>
                            {open ? <GrClose /> : <AiOutlineMenu />}
                        </div>
                        <ul className={`${open && 'menu-wrap-opened'} menu-wrap`}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Pages <AiOutlineDown style={{ marginLeft: 10 }} />

                                <div className="box">
                                    <ul>
                                        <li>Pricing Plan</li>
                                        <li>Features</li>
                                        <li>Free Quote</li>
                                        <li>Our Team</li>
                                        <li>Testimonial</li>
                                        <li>404 Page</li>
                                    </ul>
                                </div>

                            </li>
                            <li>Contact</li>

                            <li>

                                <a href="tel:+998990373914"><FaHeadphones className="fa" /> {/*+012 345 6789+*/}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar