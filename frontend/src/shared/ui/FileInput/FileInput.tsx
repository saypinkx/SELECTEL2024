import {
    Button,
    ButtonProps,
    ButtonSize,
    Icon,
    UseFileInputProps,
    useFileInput,
} from '@gravity-ui/uikit';
import { Paperclip } from '@gravity-ui/icons';
import styles from './FileInput.module.scss';

export interface FileInputProps extends ButtonProps, UseFileInputProps {
    label: string;
}

const buttonSizeToIconSize: Record<ButtonSize, number> = {
    xs: 8,
    s: 10,
    m: 12,
    l: 14,
    xl: 16,
};

export const FileInput = ({ size = 'm', label, onUpdate, onChange, ...props }: FileInputProps) => {
    const { controlProps, triggerProps } = useFileInput({ onUpdate, onChange });

    return (
        <div>
            <input {...controlProps} />
            <Button size={size} {...props} {...triggerProps}>
                {label}
                <Icon data={Paperclip} size={buttonSizeToIconSize[size]} className={styles.icon} />
            </Button>
        </div>
    );
};
