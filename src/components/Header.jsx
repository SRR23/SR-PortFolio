import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const location = useLocation();

    // Function to toggle sidebar
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    // Update `isMobile` on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
            if (window.innerWidth >= 992) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Helper function to check if the current path matches the link
    const isActive = (path) => location.pathname === path ? "colorlib-active" : "";

    return (
        <div>
            {/* Toggle Button for Mobile Only */}
            {isMobile && (
                <button
                    className={`js-colorlib-nav-toggle colorlib-nav-toggle ${isOpen ? "active" : ""}`}
                    onClick={toggleNav}
                >
                    <i></i>
                </button>
            )}

            {/* Sidebar Navigation */}
            <aside
                id="colorlib-aside"
                role="complementary"
                className={`js-fullheight text-center ${isOpen ? "open" : ""}`}
            >
                <h1 id="colorlib-logo">
                    <Link to="/" onClick={() => setIsOpen(false)}>SRR<span>.</span></Link>
                </h1>

                <nav id="colorlib-main-menu" role="navigation">
                    <ul>
                        <li className={isActive("/")}>
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className={isActive("/about/")}>
                            <Link to="/about/" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className={isActive("/skills/")}>
                            <Link to="/skills/" onClick={() => setIsOpen(false)}>Skills</Link>
                        </li>
                        <li className={isActive("/projects/")}>
                            <Link to="/projects/" onClick={() => setIsOpen(false)}>Projects</Link>
                        </li>
                        <li className={isActive("/contact/")}>
                            <Link to="/contact/" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Footer */}
                <div className="colorlib-footer">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} | <a href="www.linkedin.com/in/shaidur-rahman-09475b2b3" 
                        target="_blank" rel="noopener noreferrer">Shaidur Rahman</a>
                    </p>
                    <ul>
                        <li><a href="https://www.facebook.com/saidurrahman.rimon?mibextid=ZbWKwL"><i className="icon-facebook"></i></a></li>
                        <li><a href="https://wa.link/19gx1s"><i className="icon-whatsapp"></i></a></li>
                        <li><a href="https://github.com/SRR23"><i className="icon-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/shaidur-rahman-09475b2b3"><i className="icon-linkedin"></i></a></li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Header;
