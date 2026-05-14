import type { ReactNode } from "react"

import styles from "./mainLayout.module.css";

type MainLayoutProps = {
    children: ReactNode;
};

function mainLayout({ children }: MainLayoutProps) {
    return (
        <main className={styles.layout}>
            {children}
        </main>
    )
}

export default mainLayout;