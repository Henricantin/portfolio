import styles from "./Contact.module.css";

function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<div className={`container ${styles.content}`}>
				<span className={styles.label}>
					Vamos construir algo incrível juntos!
				</span>

				<h2>Entre em Contato</h2>

				<a
					href="mailto:henrique.barrosleo@hotmail.com"
					className={styles.email}
				>
					henrique.barrosleo@hotmail.com
				</a>

				<div className={styles.links}>
					<a href="/" target="_blank" rel="noreferrer">
						LinkedIn
					</a>

					<a href="/" target="_blank" rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
