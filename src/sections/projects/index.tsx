import ProjectCard from "../../components/ProjectCard";

import styles from "./Projects.module.css";

function Projects() {
	return (
		<section id="projects" className={styles.projects}>
			<div className={`container ${styles.content}`}>
				<div className={styles.header}>
					<span>Navegue pelos meus</span>

					<h2>Projetos</h2>
				</div>

				<div className={styles.grid}>
					<ProjectCard
						title="Projeto One"
						image="/project-1.jpg"
						githubUrl="/"
						liveUrl="/"
						stack={["React", "TypeScript", "CSS Modules"]}
					/>

					<ProjectCard
						title="Projeto Two"
						image="/project-2.jpg"
						githubUrl="/"
						liveUrl="/"
						stack={["React", "JavaScript", "Vite"]}
					/>

					<ProjectCard
						title="Climatempo"
						image="src/assets/images/climatempo_project.png"
						githubUrl="https://github.com/Henricantin/climatempo"
						// liveUrl="/"
						stack={["HTML", "JavaScript", "CSS"]}
					/>
				</div>
			</div>
		</section>
	);
}

export default Projects;
