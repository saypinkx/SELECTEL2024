import { TextInput, TextInputProps } from '@gravity-ui/uikit';
import { ChangeEvent, useId, useState } from 'react';
import { LabelableContainer } from '../LabelableContainer';

interface TextBoxProps extends Omit<TextInputProps, 'onChange' | 'errorMessage'> {
    onChange?: (value: string) => void;
    errorMessage?: string;
    alwaysShowError?: boolean;
    label?: string;
}

export const TextBox = ({ label, size = 'xl', ...props }: TextBoxProps) => {
    const [touched, setTouched] = useState(false);

    const id = useId();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        props.onChange?.(newValue);
    };

    const onBlur = () => {
        if (!touched) {
            setTouched(true);
        }
    };

    const showError = props.alwaysShowError || touched;
    const textbox = (
        <TextInput
            id={id}
            value={props.value}
            size={size}
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            errorMessage={props.errorMessage}
            validationState={showError && props.errorMessage ? 'invalid' : undefined}
        />
    );

    return label ? <LabelableContainer label={label} children={textbox} /> : textbox;
};
