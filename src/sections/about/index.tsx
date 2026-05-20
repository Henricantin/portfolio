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

								<strong>React, TypeScript, Tailwind & CSS</strong>
							</article>

							<article className={styles.card}>
								<span>Demais conhecimentos</span>

								<strong>Python & PHP | MySQL | Git | Figma</strong>
							</article>
						</div>

						<p className={styles.description}>
							Minha carreira em desenvolvimento começou em 2023, quando decidi
							retornar ao Brasil após uma experiência de trabalho na Irlanda.
							Desde então, me dedico a evoluir minhas habilidades em
							desenvolvimento web, com foco em Front-end.
							<br />
							<br />
							Minha afeição por tecnologia e design me levou a explorar diversas
							áreas, desde a criação de interfaces intuitivas até a
							implementação de funcionalidades complexas.
							<br />
							<br />
							Hoje, atuo principalmente com React, TypeScript, Tailwind CSS,
							sendo responsável por criar páginas web responsivas, interativas e
							agradáveis aos olhos dos usuários. Creio que minha escolha pela
							parte visual do mundo Dev se deve à minha antiga paixão no mundo
							da comunicação, quando tive a oportunidade de me tornar bacharel
							em Jornalismo, no ano de 2022.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
