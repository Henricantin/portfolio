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
					<span>Figma</span>
				</div>
			</div>

			<div className={styles.details}>
				<span className={styles.period}>2026 — Atual</span>

				<p>
					Construção de interfaces modernas, responsivas e performáticas.
					Consumo de APIs e integração com back-end. Boas práticas de
					usabilidade e experiência do usuário. Colaboração com design, através
					do Figma. Criação de componentes reutilizáveis e manutenção de código
					limpo.
				</p>
			</div>
		</article>
	);
}

export default ExperienceCard;
