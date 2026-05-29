import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
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

				<div className={styles.links}>
					<a
						href="https://wa.me/5511945085959"
						target="_blank"
						rel="noreferrer"
						className={`${styles.card} ${styles.whatsapp}`}
					>
						<FaWhatsapp />

						<span>WhatsApp</span>
					</a>

					<a
						href="https://www.linkedin.com/in/henriquebl/"
						target="_blank"
						rel="noreferrer"
						className={`${styles.card} ${styles.linkedin}`}
					>
						<FiLinkedin />

						<span>LinkedIn</span>
					</a>

					<a
						href="https://github.com/Henricantin"
						target="_blank"
						rel="noreferrer"
						className={`${styles.card} ${styles.github}`}
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
