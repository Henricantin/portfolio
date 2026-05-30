import type { ReactNode } from "react";

import styles from "./MainLayout.module.css";

type MainLayoutProps = {
	children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
	return <main className={styles.layout}>{children}</main>;
}

export default MainLayout;
