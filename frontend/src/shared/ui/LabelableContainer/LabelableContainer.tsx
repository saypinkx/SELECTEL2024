import { ReactNode } from 'react';
import styles from './LabelableContainer.module.scss';

export interface LabelableContainerProps {
    label: string;
    children: ReactNode;
}

export const LabelableContainer = ({ label, children }: LabelableContainerProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            {children}
        </div>
    );
};
