import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Contact.module.css";

function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<div className={`container ${styles.content}`}>
				<div className={styles.header}>
					<span className={styles.label}>
						Vamos construir algo incrível juntos!
					</span>

					<h2>Entre em Contato</h2>
				</div>

				<a
					href="mailto:henrique.barrosleo@hotmail.com"
					className={styles.email}
				>
					<FiMail />

					<span>henrique.barrosleo@hotmail.com</span>
				</a>

				<div className={styles.links}>
					<a
						href="https://www.linkedin.com/in/henriquebl/"
						target="_blank"
						rel="noreferrer"
					>
						<FiLinkedin />

						<span>LinkedIn</span>
					</a>

					<a
						href="https://github.com/Henricantin"
						target="_blank"
						rel="noreferrer"
					>
						<FiGithub />

						<span>GitHub</span>
					</a>
				</div>
			</div>

			<footer className={styles.footer}>
				<span>© 2026 Henrique Leonardo. Todos os direitos reservados.</span>
			</footer>
		</section>
	);
}

export default Contact;
