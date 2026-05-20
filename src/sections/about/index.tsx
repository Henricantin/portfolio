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
								<span>Graduações</span>

								<strong>2+ anos</strong>

								<p>Desenvolvimento Front-end</p>
							</article>

							<article className={styles.card}>
								<span>Stacks</span>

								<strong>React & TypeScript</strong>

								<p>Tailwind CSS</p>
							</article>
						</div>

						<p className={styles.description}>
							Desenvolvedor Front-end focado na criação de interfaces modernas,
							responsivas e acessíveis. Atualmente atuo no desenvolvimento de
							sistemas internos e aplicações web utilizando React, Angular e
							TypeScript.
							<br />
							<br />
							Minha experiência internacional na Irlanda ampliou minha
							comunicação, adaptabilidade e visão profissional, características
							que hoje aplico no desenvolvimento de produtos digitais.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
