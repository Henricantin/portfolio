import styles from "./About.module.css";

function About() {
	return (
		<section id="about" className={styles.about}>
			<div className={`container ${styles.content}`}>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quas
					omnis harum voluptate, facilis architecto neque eum explicabo quo
					sequi, porro, sint voluptatem assumenda! Velit ipsa animi inventore
					architecto sit.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
					adipisci tempore quisquam dolor laboriosam itaque neque eum, molestias
					recusandae molestiae obcaecati dignissimos sed corrupti eaque, esse
					expedita. Corrupti, dolore eveniet.
				</p>
			</div>
		</section>
	);
}

export default About;
