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
import { Top100Response } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

@Service()
export class UserInformationApi<SecurityDataType = unknown> {
  constructor(public http: HttpClient<SecurityDataType>) {
    this.http = Container.get(HttpClient) as HttpClient<SecurityDataType>;
  }

  /**
   * @description Retrieves a list of top 100 users based on various filters like age, blood group, etc.
   *
   * @tags User Information
   * @name UsersTopRetrieve
   * @summary Top 100 Users
   * @request GET:/api/users_top/
   * @secure
   */
  usersTopRetrieve = (
    query?: {
      age_end?: number;
      age_start?: number;
      blood_group?: string;
      blood_station_id?: number;
      by_year?: boolean;
      city?: number;
      components?: string;
      country?: number;
      gender?: string;
      kell?: string;
      organization_id?: number;
      region?: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<Top100Response, any>({
      path: `/api/users_top/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
