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
import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';

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
    const [hasValue, setHasValue] = useState(false);

    const myOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        if (e.target.files?.[0]) {
            setHasValue(true);
        }
    };
    const { controlProps, triggerProps } = useFileInput({ onUpdate, onChange: myOnChange });

    return (
        <div>
            <input {...controlProps} />
            <Button size={size} {...props} {...triggerProps}>
                {label}
                <Icon
                    data={Paperclip}
                    size={buttonSizeToIconSize[size]}
                    className={clsx(styles.icon, hasValue && styles.iconWithFile)}
                />
            </Button>
        </div>
    );
};
