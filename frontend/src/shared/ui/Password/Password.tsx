import { PasswordInput, PasswordInputProps } from '@gravity-ui/components';
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
        <PasswordInput
            {...props}
            onBlur={onBlur}
            errorMessage={props.errorMessage}
            validationState={touched && props.errorMessage ? 'invalid' : undefined}
        />
    );
};
