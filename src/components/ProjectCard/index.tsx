import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
	title: string;
	image: string;
	githubUrl: string;
	liveUrl?: string;
	stack: string[];
};

function ProjectCard({
	title,
	image,
	githubUrl,
	liveUrl,
	stack,
}: ProjectCardProps) {
	return (
		<article className={styles.card}>
			<img src={image} alt={title} className={styles.image} />

			<div className={styles.content}>
				<h3>{title}</h3>

				<div className={styles.stack}>
					{stack.map((tech) => (
						<span key={tech}>{tech}</span>
					))}
				</div>

				<div className={styles.links}>
					<a href={githubUrl} target="_blank" rel="noreferrer">
						GitHub
					</a>

					{liveUrl && (
						<a href={liveUrl} target="_blank" rel="noreferrer">
							Live Demo
						</a>
					)}
				</div>
			</div>
		</article>
	);
}

export default ProjectCard;
