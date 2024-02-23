import type { Validator, ValidatorResult } from './type';

export const validate = (value: string, ...validators: Validator[]): ValidatorResult => {
    for (const validator of validators) {
        const { isValid, errorMessage } = validator(value);
        if (!isValid) {
            return {
                isValid,
                errorMessage,
            };
        }
    }
    return {
        isValid: true,
        errorMessage: '',
    };
};
