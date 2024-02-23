import { TextInput, TextInputProps } from '@gravity-ui/uikit';
import { ChangeEvent, useState } from 'react';

interface TextBoxProps extends Omit<TextInputProps, 'onChange' | 'errorMessage'> {
    onChange?: (value: string) => void;
    errorMessage?: string;
}

export const TextBox = (props: TextBoxProps) => {
    const [touched, setTouched] = useState(false);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        props.onChange?.(newValue);
    };

    const onBlur = () => {
        if (!touched) {
            setTouched(true);
        }
    };

    return (
        <TextInput
            value={props.value}
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            errorMessage={props.errorMessage}
            validationState={touched && props.errorMessage ? 'invalid' : undefined}
        />
    );
};
