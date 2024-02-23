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

import { Service } from "typedi";
import { ResetPassword, User } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

@Service()
export class AccountRecoveryApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;
  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Verifies an SMS code sent to a user’s phone number.
   *
   * @tags Account Recovery
   * @name AuthCheckSmsCodeCreate
   * @summary Check SMS Code
   * @request POST:/api/auth/check_sms_code/
   * @secure
   */
  authCheckSmsCodeCreate = (
    data: {
      code: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        token?: string;
      },
      {
        message?: string;
      }
    >({
      path: `/api/auth/check_sms_code/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Handles account recovery through email or phone. The method of recovery depends on the user's registered login type. It sends an email or SMS with recovery instructions.
   *
   * @tags Account Recovery
   * @name AuthRecoverCreate
   * @summary Account Recovery
   * @request POST:/api/auth/recover/
   * @secure
   */
  authRecoverCreate = (
    data: {
      username: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        login_type?: string;
        message?: string;
      },
      {
        message?: string;
      }
    >({
      path: `/api/auth/recover/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Resends a phone verification code to the user.
   *
   * @tags Account Recovery
   * @name AuthResendCodeCreate
   * @summary Resend Phone Verification Code
   * @request POST:/api/auth/resend_code/
   * @secure
   */
  authResendCodeCreate = (
    data: {
      user_id: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        status?: string;
      },
      {
        status?: string;
      }
    >({
      path: `/api/auth/resend_code/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a new email confirmation code to the user.
   *
   * @tags Account Recovery
   * @name AuthResendEmailCodeCreate
   * @summary Resend Email Confirmation Code
   * @request POST:/api/auth/resend_email_code/
   * @secure
   */
  authResendEmailCodeCreate = (
    data: {
      user_id: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        status?: string;
      },
      {
        status?: string;
      }
    >({
      path: `/api/auth/resend_email_code/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Allows a user to set a new password, usually as part of a password reset process.
   *
   * @tags Account Recovery
   * @name AuthSetPasswordCreate
   * @summary Set Password
   * @request POST:/api/auth/set_password/
   * @secure
   */
  authSetPasswordCreate = (data: ResetPassword, params: RequestParams = {}) =>
    this.http.request<User, any>({
      path: `/api/auth/set_password/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
