import ExperienceCard from "../../components/ExperienceCard";

import styles from "./Experience.module.css";

function Experience() {
	return (
		<section id="experience" className={styles.experience}>
			<div className={`container ${styles.content}`}>
				<h2>Experiência</h2>

				<ExperienceCard />
			</div>
		</section>
	);
}

export default Experience;
