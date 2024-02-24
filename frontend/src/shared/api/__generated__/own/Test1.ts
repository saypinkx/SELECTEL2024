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
import { HttpClient, RequestParams } from "./http-client";

@Service()
export class Test1Api<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * No description
   *
   * @name TestRequestTest1Get
   * @summary Test Request
   * @request GET:/test1/
   */
  testRequestTest1Get = (params: RequestParams = {}) =>
    this.http.request<any, any>({
      path: `/test1/`,
      method: "GET",
      format: "json",
      ...params,
    });
}
