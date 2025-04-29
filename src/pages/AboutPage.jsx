import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    // Trigger animations after the page loads
    const elements = document.querySelectorAll(".animate");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 300); // Stagger animation for a smoother effect
    });
  }, []);

  return (
    <div id="colorlib-page" style={{ overflowY: "auto", height: "100vh" }}>
      <div id="colorlib-main">
        <div
          className="hero-wrap"
          style={{
            backgroundImage: "url('/images/SR.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh", // Allow scrolling
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column", // Adjust layout for scrolling
            position: "relative",
            color: "#fff",
            padding: "50px 20px", // Add padding for better spacing
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
            {/* Profile Image */}
            <div
              className="img mb-4 animate"
              style={{
                backgroundImage: "url('/images/SR2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "4px solid white",
                margin: "0 auto",
              }}
            ></div>

            {/* Introduction */}
            <div className="desc">
              <h2 className="subheading animate" style={{ color: "#f8f8f8" }}>
                About Me
              </h2>
              <h1 className="mb-4 animate" style={{ color: "#fff" }}>
                Shaidur Rahman Rimon
              </h1>
              <p
                className="mb-4 animate"
                style={{ color: "#ddd", maxWidth: "700px", margin: "0 auto" }}
              >
                I am a passionate **Django Developer** with sound knowledge 
                in web development, specializing in **Django,
                Django Rest Framework (DRF), React, and front-end
                technologies**. I enjoy building efficient, scalable, and
                user-friendly applications that solve real-world problems.
              </p>

              {/* Additional Details */}
              <p className="animate" style={{ color: "#ddd" }}>
                {/* 💼 Completed a 3 months paid internship **Full Stack Development Intern
                (Remote)**. <br /> */}
                🎓 Pursuing a **B.Sc.(Engg.) in ICT** at **Islamic University,
                Bangladesh**. <br />
                💡 Experienced in **API development, authentication, and
                full-stack development**. <br />
                🚀 Passionate about **learning new technologies**.
                
              </p>

              {/* More Details Button */}
              <p>
                <a
                  href="/Shaidur_Rahman(Resume).pdf"
                  download="Shaidur_Rahman(Resume).pdf"
                  className="btn-custom animate"
                  style={{
                    background: "#fff",
                    color: "#333",
                    padding: "12px 24px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginTop: "40px",
                    display: "inline-block",
                  }}
                >
                  Download Resume{" "}
                  <span className="ion-ios-arrow-forward"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
