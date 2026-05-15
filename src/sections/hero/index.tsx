import styles from "./Hero.module.css";

function Hero() {
	return (
		<section id="home" className={styles.hero}>
			<div className={`container ${styles.content}`}>
				<span className={styles.greeting}>Olá, eu sou o Henrique.</span>

				<h1 className={styles.title}>
					Desenvolvedor <span>Front-end.</span>
				</h1>
			</div>
		</section>
	);
}

export default Hero;
