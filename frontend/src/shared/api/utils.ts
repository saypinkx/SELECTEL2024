import { AxiosError } from 'axios';

export type ApiError<T extends string> = AxiosError<Record<T, string>>;

export const isApiError = <T extends string>(error: unknown): error is ApiError<T> => {
    return error instanceof AxiosError;
};
