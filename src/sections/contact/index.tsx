import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "./Contact.module.css";

function Contact() {
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		emailjs.sendForm(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			event.currentTarget,
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
		);

		event.currentTarget.reset();
	}

	return (
		<section id="contact" className={styles.contact}>
			<div className={`container ${styles.content}`}>
				<div className={styles.header}>
					<span className={styles.label}>
						Vamos construir algo incrível juntos!
					</span>

					<h2>Entre em Contato</h2>
				</div>

				<div className={styles.contactGrid}>
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

					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles.row}>
							<input type="text" name="name" placeholder="Nome" />
							<input type="email" name="email" placeholder="E-mail" />
						</div>

						<input type="subject" name="subject" placeholder="Assunto" />

						<textarea name="message" placeholder="Mensagem" />

						<button type="submit">Enviar Mensagem</button>
					</form>
				</div>
			</div>

			<footer className={styles.footer}>
				<span>© 2026 Henrique Leonardo. Todos os direitos reservados.</span>
			</footer>
		</section>
	);
}

export default Contact;
