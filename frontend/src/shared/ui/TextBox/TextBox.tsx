import { TextInput, TextInputProps } from '@gravity-ui/uikit';
import { ChangeEvent } from 'react';

interface TextBoxProps extends Omit<TextInputProps, 'onChange' | 'errorMessage'> {
    onChange?: (value: string) => void;
    errorMessage?: string;
}

export const TextBox = (props: TextBoxProps) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        props.onChange?.(newValue);
    };

    return (
        <TextInput
            value={props.value}
            {...props}
            onChange={onChange}
            validationState={props.errorMessage ? 'invalid' : undefined}
            errorMessage={props.errorMessage}
        />
    );
};
