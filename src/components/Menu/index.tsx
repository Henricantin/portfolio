import { useState } from "react";

import styles from "./Menu.module.css";

function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button type="button" className={styles.menuButton} onClick={toggleMenu}>
				MENU
			</button>

			<div className={`${styles.overlay} ${isOpen ? styles.active : ""}`}>
				<button
					type="button"
					className={styles.closeButton}
					onClick={toggleMenu}
				>
					FECHAR
				</button>

				<nav className={styles.nav}>
					<button
						type="button"
						onClick={() => {
							document
								.getElementById("home")
								?.scrollIntoView({ behavior: "smooth" });

							toggleMenu();
						}}
					>
						Home
					</button>

					<button
						type="button"
						onClick={() => {
							document
								.getElementById("about")
								?.scrollIntoView({ behavior: "smooth" });

							toggleMenu();
						}}
					>
						Sobre
					</button>

					<button
						type="button"
						onClick={() => {
							document
								.getElementById("experience")
								?.scrollIntoView({ behavior: "smooth" });

							toggleMenu();
						}}
					>
						Experiência
					</button>

					<button
						type="button"
						onClick={() => {
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth" });

							toggleMenu();
						}}
					>
						Projetos
					</button>

					<button
						type="button"
						onClick={() => {
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" });

							toggleMenu();
						}}
					>
						Contato
					</button>
				</nav>
			</div>
		</>
	);
}

export default Menu;
