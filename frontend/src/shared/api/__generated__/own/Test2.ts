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
import { HTTPValidationError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

@Service()
export class Test2Api<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * No description
   *
   * @name TestRequest2Test2DataGet
   * @summary Test Request2
   * @request GET:/test2/{data}
   */
  testRequest2Test2DataGet = (data: string, params: RequestParams = {}) =>
    this.http.request<any, HTTPValidationError>({
      path: `/test2/${data}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
