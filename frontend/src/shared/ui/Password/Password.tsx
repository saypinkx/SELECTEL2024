import { PasswordInput, PasswordInputProps } from '@gravity-ui/components';
import { useState } from 'react';

interface PasswordProps extends Omit<PasswordInputProps, 'errorMessage'> {
    errorMessage?: string;
    alwaysShowError?: boolean
}

export const Password = (props: PasswordProps) => {
    const [touched, setTouched] = useState(false);

    const onBlur = () => {
        if (!touched) {
            setTouched(true);
        }
    };

    const showError = props.alwaysShowError || touched;

    return (
        <PasswordInput
            {...props}
            onBlur={onBlur}
            errorMessage={props.errorMessage}
            validationState={showError && props.errorMessage ? 'invalid' : undefined}
        />
    );
};
