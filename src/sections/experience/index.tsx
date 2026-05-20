import ExperienceCard from "../../components/ExperienceCard";

import styles from "./Experience.module.css";

function Experience() {
	return (
		<section id="experience" className={styles.experience}>
			<div className={`container ${styles.content}`}>
				<div className={styles.header}>
					<span className={styles.subtitle}>Veja a minha</span>

					<h2>Experiência</h2>
				</div>

				<ExperienceCard />
			</div>
		</section>
	);
}

export default Experience;
