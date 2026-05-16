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
						title="Projeto Three"
						image="/project-3.jpg"
						githubUrl="/"
						liveUrl="/"
						stack={["React", "TypeScript", "Node.js"]}
					/>
				</div>
			</div>
		</section>
	);
}

export default Projects;
