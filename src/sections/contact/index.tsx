import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "./Contact.module.css";

function Contact() {
	const [isSending, setIsSending] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;

		try {
			setIsSending(true);

			const response = await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);

			if (response.status === 200) {
				toast.success("E-mail enviado com sucesso!");

				form.reset();
			}
		} catch (error) {
			console.error(error);

			toast.error("Não foi possível enviar o e-mail.");
		} finally {
			setIsSending(false);
		}
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

						<button type="submit" disabled={isSending}>
							{isSending ? "Enviando..." : "Enviar mensagem"}
						</button>
					</form>
				</div>
			</div>

			<footer className={styles.footer}>
				<span>© 2026 Henricantin. Todos os direitos reservados.</span>
			</footer>
		</section>
	);
}

export default Contact;
