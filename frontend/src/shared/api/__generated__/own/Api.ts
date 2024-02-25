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

import Container, { Service } from "typedi";
import {
  BodyCreateDonationApiDonationsPost,
  BodyUpdateDonationApiDonationsDonationIdPut,
  HTTPValidationError,
} from "./data-contracts";
import { ContentType, HttpClient2, RequestParams } from "./http-client";

@Service()
export class ApiApi<SecurityDataType = unknown> {
    constructor(public http: HttpClient2<SecurityDataType>) {
        this.http = Container.get(HttpClient2) as HttpClient2<SecurityDataType>;
    }

    /**
     * No description
     *
     * @name GetUserDonationApiDonationsGet
     * @summary Get User Donation
     * @request GET:/api/donations/
     */
    getUserDonationApiDonationsGet = (
        query: {
            /** User Id */
            user_id: number;
        },
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/donations/`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name CreateDonationApiDonationsPost
     * @summary Create Donation
     * @request POST:/api/donations/
     */
    createDonationApiDonationsPost = (
        query: {
            /** Centre */
            centre: string;
            /** Date */
            date: string;
            /** Is Stationary */
            is_stationary: boolean;
            /** Location */
            location: string;
            /** Status */
            status: string;
            /** Type Donation */
            type_donation: string;
            /** Type Price */
            type_price: string;
            /** User Id */
            user_id: number;
        },
        data: BodyCreateDonationApiDonationsPost,
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/donations/`,
            method: 'POST',
            query: query,
            body: data,
            type: ContentType.FormData,
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name DownloadCertificateApiDonationsDonationIdCertificateGet
     * @summary Download Certificate
     * @request GET:/api/donations/{donation_id}/certificate
     */
    downloadCertificateApiDonationsDonationIdCertificateGet = (
        donationId: number,
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/donations/${donationId}/certificate`,
            method: 'GET',
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name UpdateDonationApiDonationsDonationIdPut
     * @summary Update Donation
     * @request PUT:/api/donations/{donation_id}
     */
    updateDonationApiDonationsDonationIdPut = (
        donationId: number,
        query: {
            /** Centre */
            centre: string;
            /** Date */
            date: string;
            /** Is Stationary */
            is_stationary: boolean;
            /** Location */
            location: string;
            /** Status */
            status: string;
            /** Type Price */
            type_price: string;
        },
        data: BodyUpdateDonationApiDonationsDonationIdPut,
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/donations/${donationId}`,
            method: 'PUT',
            query: query,
            body: data,
            type: ContentType.FormData,
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name GetDonationApiDonationsDonationIdGet
     * @summary Get Donation
     * @request GET:/api/donations/{donation_id}
     */
    getDonationApiDonationsDonationIdGet = (donationId: number, params: RequestParams = {}) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/donations/${donationId}`,
            method: 'GET',
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name CreateUserApiUsersPost
     * @summary Create User
     * @request POST:/api/users/
     */
    createUserApiUsersPost = (
        query: {
            /** Email */
            email: string;
            /** Firstname */
            firstname: string;
            /** Lastname */
            lastname: string;
            /** Password */
            password: string;
            /** Patronym */
            patronym: string;
            /** Tag */
            tag: string;
        },
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/users/`,
            method: 'POST',
            query: query,
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name GetAllUsersApiUsersGet
     * @summary Get All Users
     * @request GET:/api/users/
     */
    getAllUsersApiUsersGet = (params: RequestParams = {}) =>
        this.http.request<any, any>({
            path: `/api/users/`,
            method: 'GET',
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name GetUserApiUsersUserIdGet
     * @summary Get User
     * @request GET:/api/users/{user_id}
     */
    getUserApiUsersUserIdGet = (userId: number, params: RequestParams = {}) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/users/${userId}`,
            method: 'GET',
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name UpdateUserApiUsersUserIdPut
     * @summary Update User
     * @request PUT:/api/users/{user_id}
     */
    updateUserApiUsersUserIdPut = (
        userId: number,
        query: {
            /** New Email */
            new_email: string;
            /** New Firstname */
            new_firstname: string;
            /** New Lastname */
            new_lastname: string;
            /** New Password */
            new_password: string;
            /** New Patronym */
            new_patronym: string;
            /** New Tag */
            new_tag: string;
        },
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/users/${userId}`,
            method: 'PUT',
            query: query,
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name DeleteUserApiUsersUserIdDelete
     * @summary Delete User
     * @request DELETE:/api/users/{user_id}
     */
    deleteUserApiUsersUserIdDelete = (
        userId: string,
        query: {
            /** Item Id */
            item_id: number;
        },
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/users/${userId}`,
            method: 'DELETE',
            query: query,
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name LoginApiUsersLoginPost
     * @summary Login
     * @request POST:/api/users/login
     */
    loginApiUsersLoginPost = (
        query: {
            /** Firstname */
            firstname: string;
            /** Password */
            password: string;
        },
        params: RequestParams = {},
    ) =>
        this.http.request<any, HTTPValidationError>({
            path: `/api/users/login`,
            method: 'POST',
            query: query,
            format: 'json',
            ...params,
        });
}
