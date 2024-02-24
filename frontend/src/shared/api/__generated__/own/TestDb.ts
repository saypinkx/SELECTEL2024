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
export class TestDbApi<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * No description
   *
   * @name TestDbTestDbGet
   * @summary Test Db
   * @request GET:/test_db
   */
  testDbTestDbGet = (params: RequestParams = {}) =>
    this.http.request<any, any>({
      path: `/test_db`,
      method: "GET",
      format: "json",
      ...params,
    });
}
