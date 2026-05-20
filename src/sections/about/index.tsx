import styles from "./About.module.css";

function About() {
	return (
		<section id="about" className={styles.about}>
			<div className={`container ${styles.content}`}>
				<div className={styles.header}>
					<span>Conheça mais</span>

					<h2>Sobre mim</h2>
				</div>

				<div className={styles.aboutGrid}>
					<div className={styles.imageWrapper}>
						<img src="/profile.jpg" alt="Henrique Leonardo" />
					</div>

					<div className={styles.info}>
						<div className={styles.cards}>
							<article className={styles.card}>
								<span>Stacks principais</span>

								<strong>ReactJS, TypeScript, Tailwind CSS & Figma</strong>
							</article>

							<article className={styles.card}>
								<span>Demais conhecimentos</span>

								<strong>Python & PHP | MySQL</strong>
							</article>
						</div>

						<p className={styles.description}>
							Minha carreira em tecnologia começou em 2023, quando decidi
							retornar ao Brasil após uma experiência de trabalho na Irlanda.
							Desde então, me dedico a evoluir minhas habilidades em
							desenvolvimento, com foco em Front-end.
							<br />
							<br />
							Hoje, atuo principalmente com React, TypeScript e Tailwind CSS,
							sendo responsável por criar páginas responsivas, interativas e
							agradáveis aos olhos do usuário.
							<br />
							<br />
							Apesar da minha concentração em Front-end, tive a oportunidade de
							construir projetos em Python e PHP, incluindo com banco de dados,
							MySQL. E também, integração de APIs, no âmbito profissional,
							utilizando o Bruno API e Swagger.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
