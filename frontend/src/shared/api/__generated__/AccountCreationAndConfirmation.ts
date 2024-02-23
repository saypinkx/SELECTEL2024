/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import Container, { Service } from 'typedi';
import { EmailVerificationSerialzier, PhoneVerificationSerialzier, Registration, User } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

@Service()
export class AccountCreationAndConfirmationApi<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor() {
        this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
    }

    /**
     * @description Confirms a user's email address during the registration process.
     *
     * @tags Account Creation and Confirmation
     * @name AuthConfirmEmailRegCreate
     * @summary Confirm Email on Registration
     * @request POST:/api/auth/confirm_email_reg/
     * @secure
     */
    authConfirmEmailRegCreate = (data: EmailVerificationSerialzier, params: RequestParams = {}) =>
        this.http.request<User, any>({
            path: `/api/auth/confirm_email_reg/`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        });
    /**
     * @description Confirms phone number registration and completes the user registration process.
     *
     * @tags Account Creation and Confirmation
     * @name AuthConfirmPhoneRegCreate
     * @summary Confirm Phone Registration
     * @request POST:/api/auth/confirm_phone_reg/
     * @secure
     */
    authConfirmPhoneRegCreate = (data: PhoneVerificationSerialzier, params: RequestParams = {}) =>
        this.http.request<User, any>({
            path: `/api/auth/confirm_phone_reg/`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        });
    /**
     * @description Registers a new user, either through email or phone number.
     *
     * @tags Account Creation and Confirmation
     * @name AuthRegistrationCreate
     * @summary User Registration
     * @request POST:/api/auth/registration/
     * @secure
     */
    authRegistrationCreate = (data: Registration, params: RequestParams = {}) =>
        this.http.request<
            {
                user_id?: string;
            },
            any
        >({
            path: `/api/auth/registration/`,
            method: 'POST',
            body: data,
            secure: true,
            type: ContentType.Json,
            format: 'json',
            ...params,
        });
}
