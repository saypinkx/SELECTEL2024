import { PasswordInputProps } from '@gravity-ui/components';
import { TextInput } from '@gravity-ui/uikit';
import { useState } from 'react';

interface PasswordProps extends Omit<PasswordInputProps, 'errorMessage'> {
    errorMessage?: string;
}

export const Password = (props: PasswordProps) => {
    const [touched, setTouched] = useState(false);

    const onBlur = () => {
        if (!touched) {
            setTouched(true);
        }
    };

    return (
        <TextInput
            {...props}
            onBlur={onBlur}
            errorMessage={props.errorMessage}
            validationState={touched && props.errorMessage ? 'invalid' : undefined}
        />
    );
};
