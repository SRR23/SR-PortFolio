import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "BlogTopia",
        img: "/images/blog.png",
        description: "Description of the first project.",
        liveLink: "https://blogtopia.netlify.app/",
        githubLink: "https://github.com/SRR23/Blog-Website-API.git",
    },
    {
        id: 2,
        title: "EasyRent-Kushtia",
        img: "/images/easyrent.png",
        description: "Description of the third project.",
        liveLink: "https://easyrent-kushtia.netlify.app/",
        githubLink: "https://github.com/SRR23/Flat-Rent-API.git",
    },
    {
        id: 3,
        title: "Yummy Foods",
        img: "/images/recipe.png",
        description: "Description of the second project.",
        liveLink: "https://srr23.github.io/Recipe_Website_FrontEnd/index.html",
        githubLink: "https://github.com/SRR23/Recipe_Website_API.git",
    },
    {
        id: 4,
        title: "Grocery Shop",
        img: "/images/grocery.png",
        description: "Description of the fourth project.",
        liveLink: "https://rimon.pythonanywhere.com/",
        githubLink: "https://github.com/SRR23/Grocery_Shop.git",
    },
];

const ProjectPage = () => {
    return (
        <div className="project-page-container">
            <div className="project-content">
                <div className="project-container">
                    <h2>My Projects</h2>
                    <div className="project-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-item"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,  // Make animation slower for smoother effect
                                    delay: index * 0.3, // Staggered delay
                                    ease: "easeOut",
                                }}
                            >
                                <img src={project.img} alt={project.title} />
                                <h4>{project.title}</h4>
                                {/* <p>{project.description}</p> */}
                                <div className="project-links">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
