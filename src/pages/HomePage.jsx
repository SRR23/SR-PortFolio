import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
    useEffect(() => {
        // Triggering animations after the page loads
        const elements = document.querySelectorAll(".animate");
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("visible");
            }, index * 300); // Stagger animation for a smoother effect
        });
    }, []);

    return (
        <div id="colorlib-page">
            <div id="colorlib-main">
                <div
                    className="hero-wrap js-fullheight"
                    style={{
                        backgroundImage: "url('/images/SR.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "100vh",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        color: "#fff",
                    }}
                >
                    {/* Dark Grey Overlay */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(20, 20, 20, 0.8)",
                            zIndex: 1,
                        }}
                    ></div>

                    {/* Content */}
                    <div className="col-md-8 text text-center" style={{ zIndex: 2 }}>
                        {/* New Description */}
                        <div className="desc">
                            <h1 className="animate" style={{ color: "#fff" }}>
                                Welcome to My Portfolio
                            </h1>
                            <h2 className="animate" style={{ color: "#f8f8f8" }}>
                                This is Shaidur Rahman
                            </h2>
                            <p
                                className="animate"
                                style={{ color: "#ddd", maxWidth: "700px", margin: "0 auto" }}
                            >
                                {/* I am a Django Developer passionate about building scalable web applications.
                                With 5 years of experience, I specialize in backend development, APIs, and
                                dynamic web systems. Feel free to explore my portfolio and learn more about my work. */}
                            </p>
                            <p>
                                <Link
                                    to="/about/"
                                    className="btn-custom animate"
                                    style={{
                                        background: "#fff",
                                        color: "#333",
                                        padding: "10px 20px",
                                        borderRadius: "5px",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        marginTop: "20px",  // Add this line to move the button down
                                        display: "inline-block",  // Ensuring it's treated as a block element
                                    }}
                                >
                                    More About Me <span className="ion-ios-arrow-forward"></span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
