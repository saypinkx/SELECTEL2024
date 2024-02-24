import { ReactNode } from 'react';
import styles from './Page.module.scss';
import clsx from 'clsx';

export interface PageProps {
    title: string;
    children: ReactNode;
    cls?: string;
}

export const Page = ({ title, children, cls }: PageProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{title}</h1>
            <div className={clsx(styles.content, cls)}>{children}</div>
        </div>
    );
};
