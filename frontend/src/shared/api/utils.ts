import { AxiosError } from 'axios';

export type ApiError = AxiosError<{ message: string }>;

export const isApiError = (error: unknown): error is ApiError => {
    return error instanceof AxiosError;
};
