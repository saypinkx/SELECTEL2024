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
import { User } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

@Service()
export class AuthenticationApi<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * @description Authenticates a user with a username and password. Handles email and phone number formats for usernames.
   *
   * @tags Authentication
   * @name AuthLoginCreate
   * @summary User Login
   * @request POST:/api/auth/login/
   * @secure
   */
  authLoginCreate = (
    data: {
      password: string;
      username: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<User, any>({
      path: `/api/auth/login/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
