import type { ReactNode } from "react"

import styles from "./index.module.scss";

type mainLayoutProps = {
    children: ReactNode;
};

function mainLayout({ children }: mainLayoutProps) {
    return (
        <main className={styles.layout}>
            {children}
        </main>
    )
}

export default mainLayout;