import React, { useEffect } from "react";

const SkillPage = () => {
    useEffect(() => {
        // Trigger animations after the page loads
        const elements = document.querySelectorAll(".animate");
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("visible");
            }, index * 300); // Stagger animation
        });
    }, []);

    const skills = [
        { name: "C", logo: "/images/C.png" },
        { name: "C++", logo: "/images/C++.png" },
        { name: "Python", logo: "/images/python.jpg" },
        { name: "JavaScript", logo: "/images/Js.png" },
        { name: "Django", logo: "/images/django3.png" },
        { name: "React", logo: "/images/reactt.png" },
        { name: "DSA", logo: "/images/dsa3.png" },
        { name: "OOP", logo: "/images/oop.png" },
        { name: "Mysql", logo: "/images/mysql.png" },
        { name: "Postman", logo: "/images/postman3.png" },
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
                            My Skills
                        </h2>
                        <h1 className="mb-4 animate" style={{ color: "#fff" }}>
                            Technologies I Work With
                        </h1>
                        <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skill-item animate"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "120px",
                                        height: "120px",
                                        background: "#333",
                                        borderRadius: "10px",
                                        padding: "15px",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        transition: "transform 0.3s ease-in-out",
                                    }}
                                >
                                    <img src={skill.logo} alt={skill.name} style={{ width: "80px", height: "60px", marginBottom: "10px" }} />
                                    <p style={{ color: "#ddd", fontWeight: "bold" }}>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillPage;
