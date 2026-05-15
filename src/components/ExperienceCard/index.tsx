import styles from "./ExperienceCard.module.css";

function ExperienceCard() {
	return (
		<article className={styles.card}>
			<div className={styles.preview}>
				<h3>Desenvolvedor Front-end</h3>

				<span className={styles.company}>ICR Assessoria</span>

				<div className={styles.techs}>
					<span>React</span>
					<span>TypeScript</span>
					<span>Tailwind CSS</span>
				</div>
			</div>

			<div className={styles.details}>
				<span className={styles.period}>2026 — Atual</span>

				<p>
					Desenvolvimento de interfaces modernas, componentização de aplicações
					React e criação de experiências responsivas focadas em performance e
					acessibilidade.
				</p>
			</div>
		</article>
	);
}

export default ExperienceCard;
