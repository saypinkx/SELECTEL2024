import {
    Button,
    ButtonProps,
    ButtonSize,
    Icon,
    UseFileInputProps,
    useFileInput,
} from '@gravity-ui/uikit';
import { Paperclip } from '@gravity-ui/icons';

export interface FileInputProps extends ButtonProps, UseFileInputProps {
    label: string;
}

const buttonSizeToIconSize: Record<ButtonSize, number> = {
    xs: 14,
    s: 16,
    m: 18,
    l: 20,
    xl: 24,
};

export const FileInput = ({ size = 'm', label, onUpdate, onChange, ...props }: FileInputProps) => {
    const { controlProps, triggerProps } = useFileInput({ onUpdate, onChange });

    return (
        <div>
            <input {...controlProps} />
            <Button size={size} {...props} {...triggerProps}>
                {label}
                <Icon data={Paperclip} size={buttonSizeToIconSize[size]} />
            </Button>
        </div>
    );
};
