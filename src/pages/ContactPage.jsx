import React, { useEffect } from "react";

const ContactPage = () => {
    useEffect(() => {
        // Trigger animations after the page loads
        const elements = document.querySelectorAll(".animate");
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("visible");
            }, index * 300); // Stagger animation
        });
    }, []);

    const contactInfo = [
        { label: "Email", value: "srrimon267@gmail.com", icon: "📧" },
        { label: "Phone", value: "+8801316743626", icon: "📞" },
        { label: "Address", value: "Kushtia, Bangladesh", icon: "📍" },
    ];

    return (
        <div id="colorlib-page" style={{ overflowY: "auto", height: "100vh" }}>
            <div id="colorlib-main">
                <div
                    className="hero-wrap"
                    style={{
                        background: "url(/images/SR.jpg) no-repeat center center/cover",
                        minHeight: "100vh",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        position: "relative",
                        color: "#fff",
                        padding: "50px 20px",
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
                        <h2 className="subheading animate" style={{ color: "#f8f8f8" }}>
                            Contact Me
                        </h2>
                        <h1 className="mb-4 animate" style={{ color: "#fff" }}>
                            Get in Touch
                        </h1>
                        <div className="contact-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
                            {contactInfo.map((contact, index) => (
                                <div
                                    key={index}
                                    className="contact-item animate"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "200px",
                                        height: "120px",
                                        background: "#333",
                                        borderRadius: "10px",
                                        padding: "15px",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        transition: "transform 0.3s ease-in-out",
                                    }}
                                >
                                    <span style={{ fontSize: "30px", marginBottom: "10px" }}>{contact.icon}</span>
                                    <p style={{ color: "#ddd", fontWeight: "bold" }}>{contact.label}</p>
                                    <p style={{ color: "#fff" }}>{contact.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
